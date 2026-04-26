const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();

  let valid = true;
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (usernameValue.length < 3 || usernameValue.length > 25) {
    showError(username, 'Username must be between 3 and 25 characters.');
    valid = false;
  }

  if (!emailValue.includes('@') || !emailValue.includes('.')) {
    showError(email, 'Please enter a valid email address.');
    valid = false;
  }

  if (passwordValue.length < 8) {
    showError(password, 'Password must have at least 8 characters.');
    valid = false;
  }

  if (!hasLowerCase(passwordValue) || !hasUpperCase(passwordValue) || !hasNumber(passwordValue) || !hasSpecialCharacter(passwordValue)) {
    showError(password, 'Password must include lowercase, uppercase, number, and special character.');
    valid = false;
  }

  if (passwordValue !== confirmPasswordValue) {
    showError(confirmPassword, 'Please enter the same password again.');
    valid = false;
  }

  if (valid) {
    alert('Sign up successful!');
    form.reset();
  }
});

function showError(input, message) {
  const error = input.parentElement.querySelector('.error-message');
  input.classList.add('invalid');
  error.textContent = message;
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  const inputs = document.querySelectorAll('input');

  errorMessages.forEach(function (error) {
    error.textContent = '';
  });

  inputs.forEach(function (input) {
    input.classList.remove('invalid');
  });
}

function hasLowerCase(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'a' && text[i] <= 'z') {
      return true;
    }
  }
  return false;
}

function hasUpperCase(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'A' && text[i] <= 'Z') {
      return true;
    }
  }
  return false;
}

function hasNumber(text) {
  const numbers = '0123456789';
  for (let i = 0; i < text.length; i++) {
    if (numbers.includes(text[i])) {
      return true;
    }
  }
  return false;
}

function hasSpecialCharacter(text) {
  const special = '!@#$%^&*';
  for (let i = 0; i < text.length; i++) {
    if (special.includes(text[i])) {
      return true;
    }
  }
  return false;
}
