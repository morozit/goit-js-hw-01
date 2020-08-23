/*
Написати фкнкцію для пошуку логіна
- Якщо логіна немає вивести повідомлення "Пользователь [логин] не найден"
- Якщо логін найшовся, вивести повідомлення "Пользователь [логин] найден"
*/

// ! Варіант-1
//  TODO: Тернарный оператор
// ? Есть конструкция, похожая на if...else, с упрощенным синтаксисом, называемая тернарный оператор (ternary - тройной).

// ? {условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво}

// ? Вычисляется условие
// ? Если условие истинно (true), вычисляется выражение после ?, в противном случае значение после :
// ? Результат вычисленного выражения возвращается
// ? const logins = ["alfa", "litle", "lee", "boss", "leeboss"];
// ? const loginToFind = "leeboss";

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);
// ! Варіант-2
// TODO: Для итерации по массиву или перебора массива, используются циклы    // ! for...of
// ? Инструкия for...of создает цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого отдельного элемента. Это хорошая замена циклу for если не нужен доступ к счетчику итерации.

// const logins = ["alfa", "litle", "lee", "boss", "leeboss"];

// const findLogin = function (allLogins, loginToFind) {

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, "leeboss"));

// ! Варіант-3
// TODO: return тернарного оператора
const logins = ["alfa", "litle", "lee", "boss", "leeboss"];

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, "leeboss"));
