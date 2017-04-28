const Towers = require("./towers");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const play = () => {
  const towers = new Towers();

  towers.run(reader, () => {
    reader.question("Want to play? ", (res) =>{
      if (res === 'yes'){
        play();
      } else {
        console.log("Thanks for playing!");
        reader.close();
      }
    });
  });
};

play();
