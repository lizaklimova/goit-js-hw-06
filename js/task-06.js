const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    addClassListToggle("invalid", "valid");
  } else {
    addClassListToggle("valid", "invalid");
  }
}

function addClassListToggle(a, b) {
  inputRef.classList.remove(a);
  inputRef.classList.add(b);
}
