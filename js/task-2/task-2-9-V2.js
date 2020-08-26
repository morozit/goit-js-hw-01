console.log("      !!!!!!!!!!-VARIANT-2");

// ! isLoginValid  ==> чи логін дійсний
function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  return login.length >= min && login.length <= max;
}
// ! isLoginUnique ==> чи логін унікальний
function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line

  return allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  if (isLoginValid(login)) {
    // TRUE
    if (isLoginUnique(allLogins, login)) {
      // TRUE
      allLogins.push(login);
      message = SUCCESS;
    } else {
      // FALSE
      message = REFUSAL;
    }
  } else {
    // FALSE
    message = ERROR;
  }
  return message;
}

//TODO
// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) === false) {
//     message = REFUSAL;
//   } else {
//     allLogins.push(login);
//     message = SUCCESS;
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
