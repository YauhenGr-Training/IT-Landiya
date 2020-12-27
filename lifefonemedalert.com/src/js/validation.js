let firstNameInput = document.querySelector("input[name=first_name]"),
	lastNameInput = document.querySelector("input[name=last_name]"),
	phoneInput = document.querySelector("input[name=contact_phone]"),
	emailAddressInput = document.querySelector("input[name=email_address]"),
	form = document.querySelector("form"),
	alertHTML = document.querySelector("#alertMessage"),
	alertModal = document.querySelector("#alert"),
	alertCloseButton = document.querySelector("#alertCloseButton");

function stripPhoneNumber () {
	phoneInput.value = phoneInput.value.replace(/-|\s/g,"");
}

function setNewCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = 'expires=' + d.toGMTString();
	document.cookie = cname + '=' + cvalue + '; path=/; ' + expires;
}

// handle errors and return messages. all fields are assumed to have errors (be empty) by default
let errors = {
	first_name: ["First Name", true],
	last_name: ["Last Name", true],
	phone: ["Phone Number", true],
	email: ["Email address", true],
};

// each input is watching for changes; on change a validation function is fired
massAddEventListener( phoneInput, formatAndValidatePhone, errors);
// Part 1
massAddEventListener( firstNameInput, function() {
	return checkCharsForValidString(firstNameInput, 'first_name', errors);
});
massAddEventListener( lastNameInput, function() {
	return checkCharsForValidString(lastNameInput, 'last_name', errors);
});
massAddEventListener( emailAddressInput, checkEmailForAtSign, errors);

form.addEventListener('submit', function(event){
	event.preventDefault();
	submitform();
}, false);

alertCloseButton.addEventListener('click', function() {
	alertModal.style.display = 'none';
}, false);

function check(key){
	switch (key) {
		case 'first_name':
			invalidateInputStyling(firstNameInput, key, errors);
			break;
		case 'last_name':
			invalidateInputStyling(lastNameInput, key, errors);
			break;
		case 'phone':
			invalidateInputStyling(phoneInput, key, errors);
			break;
		case 'email':
			invalidateInputStyling(emailAddressInput, 'email', errors);
			break;
	}
}

function checkEmailForAtSign() {
	if (emailAddressInput.value.indexOf('@') > 0) {
		validateInputStyling(emailAddressInput, 'email', errors);
	} else {
		invalidateInputStyling(emailAddressInput, 'email', errors);
	}
}

function formatAndValidatePhone() {
	let numbers = phoneInput.value.replace(/\D+/g,""),
		char = {3:'-',6:'-'};
	phoneInput.value = '';
	for (let i = 0; i < numbers.length; i++) {
		phoneInput.value += (char[i] ? '-' : '') + numbers[i];
	}

	if ((numbers.length <= 9 || numbers.slice(0,1) == 1 ||  numbers.slice(0,1) == 0)) {
		invalidateInputStyling(phoneInput, "phone", errors);
	} else {
		validateInputStyling(phoneInput, "phone", errors);
	}
}

function checkCharsForValidString(inpt, inptVal, obj) {
	if (inpt.value.trim().length > 0) {
		validateInputStyling(inpt, inptVal, obj);
	} else {
		invalidateInputStyling(inpt, inptVal, obj);
	}
}


function massAddEventListener(inputSelector, functionToAdd) {
	inputSelector.addEventListener("keyup", functionToAdd);
	inputSelector.addEventListener("keypress", functionToAdd);
	inputSelector.addEventListener("keydown", functionToAdd);
	inputSelector.addEventListener("change", functionToAdd);
	inputSelector.addEventListener("paste", functionToAdd);
	inputSelector.addEventListener("blur", functionToAdd);
}

function invalidateInputStyling(currInput, errorsObjectKey, obj) {
	let input = currInput;
	let object = obj;
	if (input.classList) {
		input.classList.add("invalid");
		input.classList.remove("valid");
		input.nextElementSibling.classList.add("form__label-invalid");
		input.nextElementSibling.classList.remove("form__label-valid");
		input.nextElementSibling.nextElementSibling.classList.add("check-invalid");
		input.nextElementSibling.nextElementSibling.classList.remove("check-valid");
		input.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("d-none");

	}
	else {
		input.className += ' ' + "invalid";
		input.nextElementSibling.nextElementSibling.className += ' ' + "check-invalid";
	}
	(object[errorsObjectKey])[1] = true;
}

function validateInputStyling(currInput, errorsObjectKey, obj) {
	let input = currInput;
	let object = obj;

	if (input.classList) {
		input.classList.add("valid");
		input.classList.remove("invalid");
		input.nextElementSibling.classList.add("form__label-valid");
		input.nextElementSibling.classList.remove("form__label-invalid");
		input.nextElementSibling.nextElementSibling.classList.add("check-valid");
		input.nextElementSibling.nextElementSibling.classList.remove("check-invalid");
		input.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("d-none");
	}
	else {
		input.className += ' ' + "valid";
		input.nextElementSibling.nextElementSibling.className += ' ' + "check-valid";
	}
	(object[errorsObjectKey])[1] = false;
}

function submitform() {
	let errorlogging = [];
	for (let key in errors) {
		if ((errors[key])[1]) {
			errorlogging.push((errors[key])[0]);
			check(key);
		}
	}

	if (errorlogging.length == 0) {
		// logic to cookie username for ty page
		let user = firstNameInput.value;
		if (user && user != "undefined") {
			let cappedUsername = capitalizeFirstLetter(user);
			// setNewCookie function in head scripts
			setNewCookie("username", cappedUsername, 14);
		}
		// end logic to cookie username for ty page
		stripPhoneNumber();
		form.submit();
	} else {

		alertModal.style.display = 'block';
		let formatAlert = "Please enter a valid "+errorlogging.join(', ').replace(/,(?!.*,)/gmi, ' and')+".";
		alertHTML.innerHTML= formatAlert;

		return false;
	}

}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
