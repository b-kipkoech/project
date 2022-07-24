/** password validation */
const form = document.getElementById("form");
const password = document.getElementById("password");
const errorElement = document.getElementById("pass_error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (password.value.length <= 8) {
    messages.push("Password must be longer than 8 characters");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
