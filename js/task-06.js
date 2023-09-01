const inputRef = document.querySelector("#validation-input");
const inputLengthRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  if (
    event.currentTarget.value.length === Number(inputLengthRef.dataset.length)
  ) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
