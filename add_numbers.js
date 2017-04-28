const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
  }
  else {
    reader.question("Enter a number.", (res) => {
      const num = parseInt(res);
      sum += num;
      completionCallback(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
