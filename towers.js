// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

class Towers {
  run(reader, completionCallback) {
    this.reader = reader;
    
    this.promptMove( (from, to) => {
      if (this.move(from, to)) {
        if (!this.isWon()) {
          this.run();
        }
        else {
          this.render();
          console.log("Congrats!");
          completionCallback();
        }
      }
      else {
        console.log("Invalid move");
        this.run();
      }
    });
  }

  constructor() {
    this.stacks = [[1],[],[3,2]];
    // this.reader = reader;
    // this.completionCallback = completionCallback;
  }

  render() {
    for (let i = 0; i < this.stacks.length; i++) {
      console.log(`${i} : ${this.stacks[i]}`);
    }
  }

  promptMove(callback) {
    this.render();
    this.reader.question("Move from? ", res1 => {
      const from = parseInt(res1);
      this.reader.question("Move to? ", res2 => {
        const to = parseInt(res2);
        callback(from, to);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    const fromTower = this.stacks[startTowerIdx];
    if (fromTower.length === 0) {
      return false;
    }

    const toTower = this.stacks[endTowerIdx];
    if (toTower.length === 0) {
      return true;
    }

    if (fromTower[fromTower.length - 1] < toTower[toTower.length - 1]) {
      return true;
    }

    return false;
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      const disk = this.stacks[startTowerIdx].pop();
      this.stacks[endTowerIdx].push(disk);
      return true;
    }
    else {
      return false;
    }
  }

  isWon() {
    if (this.stacks[0].length === 0){
      if (this.stacks[1].length === 0 || this.stacks[2].length === 0){
        return true;
      }
    }

    return false;
  }
}

module.exports = Towers;
