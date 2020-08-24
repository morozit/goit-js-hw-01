/*
Завдання нормалізувати url назви сторінки
1 - Нормалізація рядка
2 - Розбивання по словам
3 - Зшиваєм з  дефісом 
*/
// const title = "Top 10 benefits of React framework";

// TODO: 1 variant
// const normalizedTitle = title.toLocaleLowerCase();
// const words = normalizedTitle.split(" ");
// const slug = words.join("-");

// console.log(slug);

//  TODO: 2 variant
const title1 = "Top 10 benefits of React framework";

const slug1 = title1.toLowerCase().split(" ").join("-");

console.log(slug1);

// TODO: 3 variant

const slugify = function (string) {
  // const normalizedTitle = string.toLocaleLowerCase();
  // const words = normalizedTitle.split(" ");
  // const slug = words.join("-");

  return string.toLowerCase().split(" ").join("-");
};

console.log(slugify("На всю дистанцію команда бере один комплект мотузок"));
console.log(slugify("який міняти або залишати між блоками заборонено"));
console.log(slugify("Всі блоки обладнанні лініями старту і фінішу"));
