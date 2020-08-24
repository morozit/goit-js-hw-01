/*
Написати функцію яка заміняє регістр
кожного символа в рядко на протилежний
ПРИКЛАД: "JavaScript"  ==> "jAVAsCRIPT"
*/

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase("Legion"));
console.log(changeCase("Moroz Roman"));
console.log(changeCase("mOROZ rOMAN"));
