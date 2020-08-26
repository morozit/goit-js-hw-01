// TODO: variant-1    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    numbers[i] = array[i] * 10;
  }

  return numbers;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

// TODO: variant-2    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function maps(x) {
  return x.map((n) => n * 10);
}
console.log(maps([-2, 0, 2]));
// [-20, 0, 20]

console.log(maps([-2.5, 0, 2.5]));
// [-25, 0, 25]
