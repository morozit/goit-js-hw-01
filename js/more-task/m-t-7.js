const fn = function () {};

fn(1, 2, 3, 4, 5, 6, 7);
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);

// ? парс числа     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let element = "50.25";
const result = Number.parseInt(element);
console.log(result);
