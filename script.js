const errorIds = ["name_err", "password_err", "confirm_password_err"];

// ****** utility function start ******
const getValueById = (id) => document.getElementById(id).value.trim();
// ****** utility function end ******
const submitButton = document.getElementById("register_form");

submitButton.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = getValueById("name");
  const password = getValueById("password");
  const confirm_password = getValueById("confirm_password");

  // *** REMOVE ALL EXISTING ERRORS ***
  removeErrorMessages();

  // *** FORM HANDLING ***
  const hasError = formHandling({ name, password, confirm_password });

  // Mean No error exist
  if (hasError == false) {
    alert("Form Submit Successfully");
  }
});

function removeErrorMessages() {
  for (const errId of errorIds) {
    document.getElementById(errId).innerText = "";
  }
}

function formHandling({ name, password, confirm_password }) {
  let isError = false;
  if (name.length <= 5) {
    document.getElementById("name_err").innerText =
      "Username must be atleast 6 characters";
    isError = true;
  }

  if (password.length < 8) {
    document.getElementById("password_err").innerText =
      "Password must be leaa than 8 character";
    isError = true;
  }
  if (confirm_password !== password) {
    document.getElementById("confirm_password_err").innerText =
      "Passwod is not equal to confirm password";
    isError = true;
  }

  return isError;
}
