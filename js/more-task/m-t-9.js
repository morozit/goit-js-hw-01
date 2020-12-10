// ? генератор звичайних чесел, а саме генератор фону сторінки

const colors = [
  "black",
  "brown",
  "gray",
  "white",
  "yellow",
  "orange",
  "red",
  "pink",
  "purple",
  "blue",
  "green",
];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.round() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
