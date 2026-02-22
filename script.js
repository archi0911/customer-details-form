function validateForm() {

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let address2 = document.getElementById("address2").value;
  let stateProvince = document.getElementById("stateProvince").value;
  let city = document.getElementById("city").value;
  let postalZip = document.getElementById("postalZip").value;
	let email = document.getElementById("email").value;
	let feedback = document.getElementById("feedback").value;
	let suggestions = document.getElementById("suggestions").value;


	let gender = document.querySelector('input[name="gender"]:checked');
	

  if (fname.trim() === "") {
    alert("First name must be filled out");
    return false;
  }

   if (lname.trim() === "") {
    alert("Last name must be filled out");
    return false;
  }

  if (address.trim() === "") {
    alert("Address must be filled out");
    return false;
  }
  
  if (address2.trim() === "") {
    alert("Specify nearby landmarks");
    return false;
  }

  if (city.trim() === "") {
    alert("City must be mentioned");
    return false;
  }

   if (stateProvince.trim() === "") {
    alert("State must be filled out");
    return false;
  }

  if (postalZip.trim() === "") {
    alert("Postal/ Zip Code is required");
    return false;
  }

  if (email.trim() === "") {
    alert("Email must be filled out");
    return false;
  }

	if (feedback.trim() === "") {
    alert("Feedback is required");
    return false;
  }

	if (suggestions.trim() === "") {
    alert("Suggestions must be given");
    return false;
  }

	if (!gender) {
		alert("Please select your gender");
		return false;
	}

  return true; 
}