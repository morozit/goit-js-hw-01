// TODO: після введення в prompt завжди виводить рядок (string)
// TODO: якщо треба щоб рядок став числовим елементом треба перетворити з допомогою конструктор для всіх чисел Number

let abc = prompt("Введіть кількість товарів");
abc = Number(abc);
console.log(abc);
// взнати тип рядка
console.log(typeof abc);
