//---------------------------------- Always Hungry------------------------------

function alwaysHungry(arr) {
  // your code here
  const hasFood = arr.some((el) => {
    if (el === "food") {
      return true;
    } else {
      return false;
    }
  });
  if (!hasFood) {
    console.log("I'm hungry");
  } else {
    for (let food of arr) {
      if (food === "food") console.log("yummy");
    }
  }
}
// test case
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// -------------------------High Pass Filter-----------------------------------

function highPass(arr, cutoff) {
  var filteredArr = [];
  // your code here
  filteredArr = arr.filter((el) => el > cutoff);
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//----------------------------------Better than average-----------------------------

function betterThanAverage(arr) {
  // sum the value in arr using reduce method
  var sum = arr.reduce((a, b) => a + b, 0) / arr.length;
  console.log(sum);
  // calculate the average
  var count = 0;

  // filter only the number that greater than sum
  arr.filter((el) => {
    if (el > sum) {
      count++;
      return true;
    } else return false;
  });
  // count how many values are greated than the average
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// --------------------------------Array Reverse--------------------------

function reverse(arr) {
  // your code here
  arr.reverse();
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// -------------------------Fibonacci Array--------------------------------------

function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  // index will start from index 1 and we need to go only n - 2 since we already have 2 initial elements in array
  for (let i = 1; i <= n - 2; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i]);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
