const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const absurdBubbleSort = (arr, sortCompletionCallback) => {
  const outerBubbleSortLoop = (madeAnySwaps) => {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      reader.close();
    }
  };

  outerBubbleSortLoop(true);
};

const innerBubbleSortLoop =
  (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
    console.log(arr);
    if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
        if (isGreaterThan) {
          const temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      });
    } else {
      outerBubbleSortLoop(madeAnySwaps);
    }
};

const askIfGreaterThan = (el1, el2, callback) => {
  reader.question(`Is ${el1} > ${el2}?`, (res) => {
    if (res === "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
};

// askIfGreaterThan(2, 3, (bool) => {
//   console.log(bool);
// });

absurdBubbleSort([3,2,4,1], (arr) => {
  console.log(arr);
});
