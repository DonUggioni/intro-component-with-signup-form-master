'use strict';

const formEL = document.getElementById('form');
const firstNameEL = document.getElementById('name');
const lastNameEL = document.getElementById('last__name');
const emailEL = document.getElementById('email');
const passwordEL = document.getElementById('password');

formEL.addEventListener('submit', function (e) {
  validateForm();
  e.preventDefault();
});

const validateForm = function () {
  // First name
  if (firstNameEL.value.trim() === '') {
    displayError(firstNameEL, 'First Name cannot be empty');
  } else {
    displaySuccess(firstNameEL, 'Success!');
  }

  // Last name
  if (lastNameEL.value.trim() === '') {
    displayError(lastNameEL, 'Last Name cannot be empty');
  } else {
    displaySuccess(lastNameEL, 'Success!');
  }

  // Email
  if (emailEL.value.toLowerCase().trim() === '') {
    displayError(emailEL, 'Email cannot be empty');
  } else if (checkEmail(emailEL.value)) {
    displaySuccess(emailEL, 'Success!');
  } else {
    displayError(emailEL, 'Looks like this is not an email');
  }

  // Password
  if (passwordEL.value === '') {
    displayError(passwordEL, 'Password cannot be empty');
  } else if (passwordEL.value.length < 5) {
    displayError(passwordEL, 'Password must contain at least 5 characters');
  } else {
    displaySuccess(passwordEL, 'Success!');
  }
};

// Displays error message
const displayError = function (element, message) {
  const parentEl = element.parentElement;
  if (parentEl.classList.contains('input__group--success')) {
    parentEl.classList.remove('input__group--success');
  }
  parentEl.classList.add('input__group--error');

  const messageEL = parentEl.querySelector('.message');
  messageEL.textContent = message;
};

// Display success message
const displaySuccess = function (element, message) {
  const parentEl = element.parentElement;
  if (parentEl.classList.contains('input__group--error')) {
    parentEl.classList.remove('input__group--error');
  }
  parentEl.classList.add('input__group--success');

  const messageEL = parentEl.querySelector('.message');
  messageEL.textContent = message;
};

// Email validation
const checkEmail = function (email) {
  email.toLowerCase().trim();

  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
};
