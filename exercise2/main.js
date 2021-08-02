const btn = document.querySelector("button");
const list = document.querySelector("ul");

let number = 1;

btn.addEventListener("click", () => {
  const listItem = document.createElement("li");

  listItem.textContent = number;
  number += 2;
  list.appendChild(listItem);
});
