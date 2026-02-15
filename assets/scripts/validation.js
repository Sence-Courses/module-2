const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener('input', function(e) {
  if (validateEmail(emailInput.value)) {
    clearError(emailInput);
  } else {
    showError(emailInput, 'Please enter a valid email address.');
  }
});

passwordInput.addEventListener('input', function(e) {
  if (passwordInput.value.length >= 8) {
    clearError(passwordInput);
  } else {
    showError(passwordInput, 'Password must be 8 length.');
  }
});

loginForm.addEventListener('submit', function(e) {
  if (validateEmail(emailInput.value) && passwordInput.validity.valid) {
		e.preventDefault();    
    redirection(urlRD[e.submitter.id].msg, urlRD[e.submitter.id].url);
  } else {
    window.alert('Credenciales incorrectas.');
  }
});

function showError(inputElement, message) {
  const errorSpan = inputElement.nextElementSibling;
  errorSpan.style.display = "inline";
  errorSpan.textContent = message;
	inputElement.classList.remove('valid');
  inputElement.classList.add('invalid');
}

function clearError(inputElement) {
  const errorSpan = inputElement.nextElementSibling;
  errorSpan.style.display = "none";
  errorSpan.textContent = '';
  inputElement.classList.remove('invalid');
  inputElement.classList.add('valid');

}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase());
}