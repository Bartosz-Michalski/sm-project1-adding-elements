const mainButton = document.querySelector(".main-button");
const squaresContainer = document.querySelector(".squares-container");

let number = 1;

const buttonClick = function () {
  const square = document.createElement("div");

  square.classList.add("square");
  square.textContent = number;
  squaresContainer.appendChild(square);

  if (number % 5 == 0) {
    square.classList.remove("square");
    square.classList.add("circle");
  }

  number++;
};

mainButton.addEventListener("click", buttonClick);
