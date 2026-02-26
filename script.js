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

  alert("Validation Successful");
  displayData(); 

  return false;  
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

  // const ph = /^[6-9][0-9]{9}$/;
  const ph = /^[6-9]\d{9}$/;

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
  document.getElementById("feedback-error").innerHTML = "";
}

function validateSuggestion() {
  document.getElementById("suggestion-error").innerHTML = "";
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

  const names = document.querySelectorAll(".name");
  const addresses = document.querySelectorAll(".address");
  const contacts = document.querySelectorAll(".contact");
  const error = document.getElementById("table-error");

  for (let i = 0; i < names.length; i++) {

    if (!names[i].value || !addresses[i].value || !contacts[i].value) {
      error.innerHTML = "All fields required in Row " + (i + 1);
      return false;
    }

    if (!/^\d{10}$/.test(contacts[i].value)) {
      error.innerHTML = "Contact must be exactly 10 digits (Row " + (i + 1) + ")";
      return false;
    }
  }

  error.innerHTML = "";
  return true;
}

function displayData() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("stateProvince").value;
  let pincode = document.getElementById("postalZip").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let dropdown = document.getElementById("dropdown").value;
  let gender = document.querySelector('input[name="gender"]:checked')?.value;

  document.getElementById("details").innerHTML = "<br>" + "<hr>" + "<h2>Customer Details</h2>" +
  "<br>"  + "First Name: " + fname + 
  "<br>" + "Last Name: " + lname + 
  "<br>" + "Address: " + address +  
  "<br>" + "City: " + city + 
  "<br>" + "State: " + state +
  "<br>" + "Pincode: " + pincode +
  "<br>" + "Phone No: " + phone +
  "<br>" + "Email: " + email +
  "<br>" + "Recommend: " + dropdown +
  "<br>" + "Gender: " + gender 
  ;
  // document.getElementById("details").innerHTML =  ;
}
