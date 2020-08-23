/*
Напиши функцію calculateTotalPirice яка приймає масив цін (числа) і повертає їх суму
*/

// TODO: варіант без функцій?
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total);

const calculateTotalPirice = function (items) {
  console.log("items внутри функции: ", items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

console.log(calculateTotalPirice([1, 2, 3])); // 6
console.log(calculateTotalPirice([5, 10, 15, 20])); // 50
console.log(calculateTotalPirice([100, 200, 300])); // 600
