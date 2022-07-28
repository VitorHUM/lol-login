const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login-button");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value.length >= 2 && password.value.length >= 1) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", handleChange));

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (togglePassword.classList.contains("bi-eye-slash-fill")) {
    togglePassword.classList.remove("bi-eye-slash-fill");
    togglePassword.classList.add("bi-eye-fill");
  } else {
    togglePassword.classList.remove("bi-eye-fill");
    togglePassword.classList.add("bi-eye-slash-fill");
  }
});
