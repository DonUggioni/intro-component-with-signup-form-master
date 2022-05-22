'use strict';

const formEL = document.getElementById('form');
const firstNameEL = document.getElementById('name');
const lastNameEL = document.getElementById('last__name');
const emailEL = document.getElementById('email');
const passwordEL = document.getElementById('password');
const messageEL = document.querySelector('.message');

formEL.addEventListener('submit', function (e) {
  e.preventDefault();

  validateForm();
});

const validateForm = function () {
  // First name
  if (firstNameEL.value.trim() === '') {
    displayError(firstNameEL, 'First Name cannot be empty');
  } else {
    displaySuccess(firstNameEL, 'Success!');
  }
  // Last name
  // Email
  // Password
};

const displayError = function (element, message) {
  const parentEl = element.parentElement;
  if (parentEl.classList.contains('input__group--success')) {
    parentEl.classList.remove('input__group--success');
  }
  parentEl.classList.add('input__group--error');

  messageEL.textContent = message;
};

const displaySuccess = function (element, message) {
  const parentEl = element.parentElement;
  if (parentEl.classList.contains('input__group--error')) {
    parentEl.classList.remove('input__group--error');
  }
  parentEl.classList.add('input__group--success');
  messageEL.textContent = message;
};
