/*
Завдання нормалізувати url назви сторінки
1 - Нормалізація рядка
2 - Розбивання по словам
3 - Зшиваєм з  дефісом 
*/
const title = "Top 10 benefits of React framework";

// TODO: 1 variant
const normalizedTitle = title.toLocaleLowerCase();

const words = normalizedTitle.split(" ");

const slug = words.join("-");

console.log(slug);

//  TODO: 2 variant
const slug1 = title.toLowerCase().split(" ").join("-");

console.log(slug1);
