// Form Control Div
const userNameDiv = document.querySelector(".form-control.user-name");
const passwordDiv = document.querySelector(".form-control.password");
const confirmPasswordDiv = document.querySelector(".form-control.confirm-password");
// User Inputs
const userNameInput = document.querySelector(".form-control.user-name input");
const passwordInput = document.querySelector(".form-control.password input");
const confirmPasswordInput = document.querySelector(".form-control.confirm-password input");
// Submit Button
const submitButton = document.querySelector("button");

// Focus On Username Input In Window Load
window.onload = () => {
	userNameInput.focus();
};

function inputError(input) {
	input.classList.remove("success");
	input.classList.add("error");
}

function inputSuccess(input) {
	input.classList.add("success");
	input.classList.remove("error");
}


// Username Validation
userNameInput.addEventListener("input", () => {
	// console.log(userNameInput.value)
	if (8 <= userNameInput.value.trim().length && userNameInput.value.trim().length <= 24) {
		inputSuccess(userNameDiv);
	} else {
		inputError(userNameDiv);
	}
});

// Password Validation
passwordInput.addEventListener("input", () => {
	if (passwordInput.value.trim().length >= 6) {
		inputSuccess(passwordDiv);
	} else {
		inputError(passwordDiv);
	}
	// Confirm Password Validation On Password Change
	if (confirmPasswordInput.value.trim() !== "") {
		if (confirmPasswordInput.value === passwordInput.value) {
			inputSuccess(confirmPasswordDiv);
		} else {
			inputError(confirmPasswordDiv);
		}
	}
});

// Confirm Password Validation
confirmPasswordInput.addEventListener("input", () => {
	if (confirmPasswordInput.value === passwordInput.value) {
		inputSuccess(confirmPasswordDiv);
	} else {
		inputError(confirmPasswordDiv);
	}
});

// Submission Validation
submitButton.onclick = (e) => {
	if (userNameDiv.classList.contains("success")
		&& passwordDiv.classList.contains("success")
		&& confirmPasswordDiv.classList.contains("success")) {
		// I stopped the submission just to prevent the website from reloading.
		e.preventDefault();
		userNameInput.value = "";
		userNameDiv.classList.remove("success");
		passwordInput.value = "";
		passwordDiv.classList.remove("success");
		confirmPasswordInput.value = "";
		confirmPasswordDiv.classList.remove("success");
		userNameInput.focus();
	} else {
		e.preventDefault();
		if (!userNameDiv.classList.contains("success")) {
			userNameDiv.classList.add("error");
		}
		if (!passwordDiv.classList.contains("success")) {
			passwordDiv.classList.add("error");
		}
	}
};
