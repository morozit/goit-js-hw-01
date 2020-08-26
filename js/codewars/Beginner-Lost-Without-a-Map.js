// ?  Given an array of integers, return a new array with each value doubled.

// ?  For example:

// ?  [1, 2, 3] --> [2, 4, 6]

// ?  For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

//  TODO:

const array = [1, 2, 3];
const newArray[i] = array[i] * 2;
console.log(newArray);





function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    numbers[i] = array[i] * 10;
  }

  return numbers;
}