const mainButton = document.querySelector(".main-button");
const squaresContainer = document.querySelector(".squares-container");

const buttonClick = function () {
  const square = document.createElement("div");
  square.classList.add("square");
  squaresContainer.appendChild(square);
};

mainButton.addEventListener("click", buttonClick);
