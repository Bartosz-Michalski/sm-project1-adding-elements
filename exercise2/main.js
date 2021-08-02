const btn = document.querySelector("button");
const list = document.querySelector("ul");

let number = 1;

btn.addEventListener("click", () => {
  const listItem = document.createElement("li");

  listItem.textContent = number;
  list.appendChild(listItem);

  if (number % 3 == 0) {
    listItem.classList.toggle("big");
  }

  number += 2;
});
