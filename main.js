const mainButton = document.querySelector(".main-button");
const squaresContainer = document.querySelector(".squares-container");

// const counter = function (number) {
//   return number++;
// };
let number = 1;

const buttonClick = function () {
  const square = document.createElement("div");

  square.classList.add("square");
  square.textContent = number;
  squaresContainer.appendChild(square);
  number += 1;
};

mainButton.addEventListener("click", buttonClick);
