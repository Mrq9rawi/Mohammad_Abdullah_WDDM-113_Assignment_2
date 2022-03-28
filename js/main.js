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

// Username Validation
userNameInput.addEventListener("input", () => {
	// console.log(userNameInput.value)
	if (8 <= userNameInput.value.length && userNameInput.value.length <= 24) {
		userNameDiv.classList.remove("error");
		userNameDiv.classList.add("success");
	} else {
		userNameDiv.classList.remove("success");
		userNameDiv.classList.add("error");
	}
});

// Password Validation
passwordInput.addEventListener("input", () => {
	if (passwordInput.value.length >= 6) {
		passwordDiv.classList.remove("error");
		passwordDiv.classList.add("success");
	} else {
		passwordDiv.classList.remove("success");
		passwordDiv.classList.add("error");
	}
	// Confirm Password Validation On Password Change
	if (confirmPasswordInput.value.trim() !== "") {
		if (confirmPasswordInput.value === passwordInput.value) {
			confirmPasswordDiv.classList.remove("error");
			confirmPasswordDiv.classList.add("success");
		} else {
			confirmPasswordDiv.classList.remove("success");
			confirmPasswordDiv.classList.add("error");
		}
	}
});

// Confirm Password Validation
confirmPasswordInput.addEventListener("input", () => {
	if (confirmPasswordInput.value === passwordInput.value) {
		confirmPasswordDiv.classList.remove("error");
		confirmPasswordDiv.classList.add("success");
	} else {
		confirmPasswordDiv.classList.remove("success");
		confirmPasswordDiv.classList.add("error");
	}
});

// Submission Validation
submitButton.onclick = (e) => {
	if (userNameDiv.classList.contains("success")
		&& passwordDiv.classList.contains("success")
		&& confirmPasswordDiv.classList.contains("success")) {
		e.preventDefault();
		userNameInput.value = "";
		userNameDiv.classList.remove("success");
		passwordInput.value = "";
		passwordDiv.classList.remove("success");
		confirmPasswordInput.value = "";
		confirmPasswordDiv.classList.remove("success");
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
