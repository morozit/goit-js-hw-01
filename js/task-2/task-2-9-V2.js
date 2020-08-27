console.log("      !!!!!!!!!!-VARIANT-2");

// ! isLoginValid  ==> чи логін дійсний(gправльний?)
function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  return login.length >= min && login.length <= max;
}

// ! isLoginUnique ==> чи логін унікальний
function isLoginUnique(allLogins, login) {
  "use strict";

  // TODO:  додається => ! <=  для зміни виведу тру на фалсе
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      message = SUCCESS;
    } else {
      message = REFUSAL;
    }
  } else {
    message = ERROR;
  }
  return message;
  // Write code under this line
}

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   if (isLoginValid(login)) {
//     // TRUE
//     if (isLoginUnique(allLogins, login)) {
//       // TRUE
//       message = REFUSAL;
//     } else {
//       // FALSE
//       allLogins.push(login);
//       message = SUCCESS;
//     }
//   } else {
//     // FALSE
//     message = ERROR;
//   }
//   return message;
// }

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
("Логин успешно добавлен!");

console.log(addLogin(logins, "robotGoogles"));
("Такой логин уже используется!");

console.log(addLogin(logins, "Zod"));
("Ошибка! Логин должен быть от 4 до 16 символов");

console.log(addLogin(logins, "jqueryisextremelyfast"));
("Ошибка! Логин должен быть от 4 до 16 символов");
