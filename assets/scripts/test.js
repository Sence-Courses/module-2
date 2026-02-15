/*const findContact = (contantId) => {
  let contactos = [
  {
    id: 8845,
    name: 'John Doe',
    cbu: 123456789,
    alias: ' john.doe',
    bank: 'ABC Bank'
  },
  {
    id: 2407,
    name: 'Jane Smith',
    cbu: 987654321,
    alias: 'jane.smith',
    bank: 'XYZ Bank'
  }
];
  const foundContact = contactos.find(c => c.id === contantId);
  console.log('foundContact', foundContact);
}

findContact(Number('8845'));*/

const amount = amountFormatter(e.amount);
console.log(`amount: ${amount}`);

const amountFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

/*const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener('input', function(event) {
  if (validateEmail(emailInput.value)) {
    clearError(emailInput);
  } else {
    showError(emailInput, 'Please enter a valid email address.');
  }
});

passwordInput.addEventListener('input', function(event) {
  if (passwordInput.value.length >= 8) {
    clearError(passwordInput);
  } else {
    showError(passwordInput, 'Password must be 8 length.');
  }
});

form.addEventListener('submit', function(e) {
  if (validateEmail(emailInput.value) && passwordInput.validity.valid) {
    alert('submit');
  } else {
    alert('error');
  }
});

function showError(inputElement, message) {
  const errorSpan = inputElement.nextElementSibling;
  errorSpan.style.display = "inline";
  errorSpan.textContent = message;
  inputElement.classList.add('invalid');
  inputElement.classList.remove('valid');
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
}*/