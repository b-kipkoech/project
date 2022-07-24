/** email validation                                                                                                                             */
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("Email is valid");
    $result.css("color", "green");
  } else {
    $result.text("Email is invalid");
    $result.css("color", "red");
    $error.text("Password is less than 8 characters");
    $error.css("color", "red");
  }
  return false;
};

$("#email").on("input", validate);
