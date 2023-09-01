const incBtnRef = document.querySelector('[data-action="increment"]');
const decBtnRef = document.querySelector('[data-action="decrement"]');
const counterSpanRef = document.querySelector("#value");

let counterValue = 0;

incBtnRef.addEventListener("click", onIncBtn);

decBtnRef.addEventListener("click", onDecBtn);

function onIncBtn() {
  counterSpanRef.textContent = counterValue += 1;
}

function onDecBtn() {
  counterSpanRef.textContent = counterValue -= 1;
}
