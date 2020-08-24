/*
Написати функцію найменшого числа в масиві. при умові що числа унікальні, не повторюються.
*/
const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log(findSmallesNumber([5, 1, 2, 3, -1, 0, -7, 4, 6]));
