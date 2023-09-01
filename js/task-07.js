const rangeRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("span#text");

rangeRef.addEventListener("input", rangeHandler);

function rangeHandler(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
