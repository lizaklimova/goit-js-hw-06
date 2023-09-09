// const createBtnRef = document.querySelector("button[data-create]");
// const destroyBtnRef = document.querySelector("button[data-destroy]");
// const boxRef = document.querySelector("div#boxes");

// createBtnRef.addEventListener("click", createBoxesOnClick);
// destroyBtnRef.addEventListener("click", destroyBoxesOnClick);

// let step = 30;
// function createBoxesOnClick() {
//   const amount = document.querySelector('input[type="number"]').value;
//   const arrBoxes = [];

//   for (let i = 0; i < amount; i += 1) {
//     step += 10;
//     const newBox = document.createElement("div");
//     newBox.style.width = `${step}px`;
//     newBox.style.height = `${step}px`;
//     newBox.style.backgroundColor = getRandomHexColor();
//     // boxRef.appendChild(newBox);
//     //! чи можна створювати розмітку в циклі ?
//     arrBoxes.push(newBox);
//   }
//   boxRef.append(...arrBoxes);
//   //! це другий варіант - прибрати 19 рядок и залишити 11,21,23.
// }

// function destroyBoxesOnClick() {
//   boxRef.innerHTML = "";
//   step = 30;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

