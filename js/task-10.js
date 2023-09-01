const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxRef = document.querySelector("div#boxes");

createBtnRef.addEventListener("click", createBoxesOnClick);
destroyBtnRef.addEventListener("click", destroyBoxesOnClick);

let step = 30;
function createBoxesOnClick() {
  step += 10;

  const newBox = document.createElement("div");
  newBox.style.width = `${step}px`;
  newBox.style.height = `${step}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  boxRef.appendChild(newBox);
}

function destroyBoxesOnClick() {
  boxRef.innerHTML = "";
  step = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
