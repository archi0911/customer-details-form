function validateForm() {
}

function validateFname(fname) {
  const a = /^[a-zA-Z]+$/;

  let result = fname.match(a);

  if (result !== null) {
    console.log("Valid First Name");
  } else {
    console.log("Invalid First Name");
  }
}

function validateLname(lname) {
  const a = /^[a-zA-Z]+$/;

  let result = lname.match(a);

  if (result !== null) {
    console.log("Valid Last Name");
  } else {
    console.log("Invalid Last Name");
  }
}

function validateCity (city) {
  const c = /^[a-zA-Z]+$/;

  let result = city.match(c);

  if (result !== null) {
    console.log("Valid City Name");
  } else {
    console.log("Invalid City Name");
  }
}

function validateState (state) {
  const s = /^[a-zA-Z]+$/;

  let result = state.match(s);

  if (result !== null) {
    console.log("Valid State Name");
  } else {
    console.log("Invalid State Name");
  }
}

function validatePincode (pincode) {
  const code = /^[1-9][0-9]{5}$/; 

  let result = pincode.match(code);

  if (result !== null) {
    console.log("Valid Pincode");
  } else {
    console.log("Invalid Pincode");
  }

}

function validatePhone(phone) {
  const ph = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/; 

  let result = phone.match(ph);

  if (result !== null) {
    console.log("Valid Phone Number");
  } else {
    console.log("Invalid Phone Number");
  }

}

function validateEmail(email) {
  const e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let result = email.match(e);

  if (result !== null) {
    console.log("Valid Email");
  } else {
    console.log("Invalid Email");
  }
}


