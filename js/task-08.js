const formRef = document.querySelector("form.login-form");

formRef.addEventListener("submit", submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Всі поля мають бути заповнені!!!");
  }
  const objData = {
    email: email.value,
    password: password.value,
  };

  console.log(objData);

  formRef.reset();
}
