const spanColorRef = document.querySelector("span.color");
const btnChangeColorRef = document.querySelector("button.change-color");
const bodyRef = document.querySelector("body");

btnChangeColorRef.addEventListener("click", changeBgHandler);

function changeBgHandler() {
  const functionCall = getRandomHexColor();
  bodyRef.style.backgroundColor = functionCall;
  spanColorRef.textContent = functionCall;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
