function validateForm() {

  validateFname();
  validateLname();
  validateCity();
  validateState();
  validatePhone();
  validatePincode();
  validateEmail();

  if (!validateCheckbox()) return false;
  if (!validateDropdown()) return false;
  if (!validateGender()) return false;
  if (!validateTable()) return false;

  return true;
}

function validateFname() {
  const fname = document.getElementById("fname").value;
  const error = document.getElementById("fname-error");

  const lettersOnly = /^[a-zA-Z]+$/;
  const hasDigits = /\d/;

  if (lettersOnly.test(fname)) error.innerHTML = "";
  else if (hasDigits.test(fname))
    error.innerHTML = "Digits not allowed in First Name";
  else error.innerHTML = "Invalid First Name";
}

function validateLname() {
  const lname = document.getElementById("lname").value;
  const error = document.getElementById("lname-error");

  const lettersOnly = /^[a-zA-Z]+$/;
  const hasDigits = /\d/;

  if (lettersOnly.test(lname)) error.innerHTML = "";
  else if (hasDigits.test(lname))
    error.innerHTML = "Digits not allowed in Last Name";
  else error.innerHTML = "Invalid Last Name";
}

function validateAddress(input) {
  const value = input.value.trim();
  const error = document.getElementById(input.id + "-error");
  const regex = /^[a-zA-Z0-9\s,./#-]+$/;

  if (value === "") error.innerHTML = "Address cannot be empty";
  else if (!regex.test(value)) error.innerHTML = "Invalid address";
  else error.innerHTML = "";
}

function validateCity() {
  const city = document.getElementById("city").value;
  const error = document.getElementById("city-error");

  const lettersOnly = /^[a-zA-Z]+$/;
  const hasDigits = /\d/;

  if (lettersOnly.test(city)) error.innerHTML = "";
  else if (hasDigits.test(city))
    error.innerHTML = "Digits not allowed in City";
  else error.innerHTML = "Invalid City";
}

function validateState() {
  const state = document.getElementById("stateProvince").value;
  const error = document.getElementById("state-error");

  const lettersOnly = /^[a-zA-Z]+$/;
  const hasDigits = /\d/;

  if (lettersOnly.test(state)) error.innerHTML = "";
  else if (hasDigits.test(state))
    error.innerHTML = "Digits not allowed in State";
  else error.innerHTML = "Invalid State";
}

function validatePincode() {
  const pincode = document.getElementById("postalZip").value;
  const error = document.getElementById("pincode-error");

  const code = /^[1-9][0-9]{5}$/;

  if (code.test(pincode)) error.innerHTML = "";
  else error.innerHTML = "Invalid Pincode";
}

function validatePhone() {
  const phone = document.getElementById("phone").value;
  const error = document.getElementById("phone-error");

  const ph = /^[6-9][0-9]{9}$/;

  if (ph.test(phone)) error.innerHTML = "";
  else error.innerHTML = "Invalid Phone Number";
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("email-error");

  const e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (e.test(email)) error.innerHTML = "";
  else error.innerHTML = "Invalid Email";
}

function validateDropdown() {
  var dropdown = document.getElementById("dropdown");
  var error = document.getElementById("dropdown-error");

  if (dropdown.selectedIndex === 0) {
    error.innerHTML = "Please select an option";
    return false;
  }

  error.innerHTML = "";
  return true;
}

function validateFeedback() {
  const feedback = document.getElementById("feedback").value;
  const error = document.getElementById("feedback-error");

  const f = /^[a-zA-Z0-9.,!?'\- ]+$/;

  if (f.test(feedback)) error.innerHTML = "";
  else error.innerHTML = "Invalid Feedback";
}

function validateSuggestion() {
  const suggestion = document.getElementById("suggestions").value;
  const error = document.getElementById("suggestion-error");

  const s = /^[a-zA-Z0-9.,!?'\- ]+$/;

  if (s.test(suggestion)) error.innerHTML = "";
  else error.innerHTML = "Invalid Suggestion";
}

function validateCheckbox() {
  var checkbox = document.getElementById("checkbox");
  var error = document.getElementById("checkbox-error");

  if (!checkbox.checked) {
    error.innerHTML = "Must check the checkbox!";
    return false;
  }

  error.innerHTML = "";
  return true;
}

function validateGender() {
  var radios = document.getElementsByName("gender");
  var error = document.getElementById("radio-error");

  var selected = false;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    error.innerHTML = "Please select your gender";
    return false;
  }

  error.innerHTML = "";
  return true;
}

function validateTable() {

  let names = document.querySelectorAll(".name");
  let addresses = document.querySelectorAll(".address");
  let contacts = document.querySelectorAll(".contact");
  let error = document.getElementById("table-error");

  for (let i = 0; i < 2; i++) {

    if (
      names[i].value.trim() === "" ||
      addresses[i].value.trim() === "" ||
      contacts[i].value.trim() === ""
    ) {
      error.innerHTML = "All fields required in Row " + (i + 1);
      return false;
    }

    if (!/^[0-9]{10}$/.test(contacts[i].value.trim())) {
      error.innerHTML = "Invalid contact number in Row " + (i + 1);
      return false;
    }
  }

  error.innerHTML = "";
  alert("Validation Successful ✅");
  return true;
}