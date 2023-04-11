"use strict";

let button = document.querySelector("button");

button.addEventListener("click", checkInputs);

function checkInputs() {
  let testQuestions = document.querySelectorAll(".testQuestions");
  let right = 0;
  let wrong = 0;
  let without = 0;
  // Если отмечен правильный ответ записываем в переменную, если ответ неправильный или его нет, делаем аналогичные действия
  for (let i = 0; i < testQuestions.length; i++) {
    let inputs = testQuestions[i].querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked == true && inputs[i].classList.contains("true")) {
        right += 1;
      } else if (inputs[i].checked == true && inputs[i].classList.contains("false")) {
        wrong += 1;
      } else {
        without += 1;
      }
    }
  }
  // Выводим колличество правильных и не правильных ответов alert-ом
  let rightAnswers = "Правильных ответов: " + right + "(" + Math.round((right / testQuestions.length) * 100) + "%)";
  let wrongAnswers = "Неправильных ответо: " + wrong;
  let withoutAnswers = "Без ответов: " + (testQuestions.length - (right + wrong));
  alert(rightAnswers + "\n" + wrongAnswers + "\n" + withoutAnswers)
}
