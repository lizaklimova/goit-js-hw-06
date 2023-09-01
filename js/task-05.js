const inputRef = document.querySelector("#name-input");
const outputSpanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", inputHandler);

function inputHandler(event) {
  outputSpanRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value.trim() === "") {
    outputSpanRef.textContent = "Anonymous";
  }
}
