const addProjectBtn = document.body.querySelector('#add-project-btn');
const cancelProjectBtnForm = document.body.querySelector(
  '#cancel-project-btn-form',
);
const addProjectPanel = document.body.querySelector('#add-project-panel');

const employeeNameError = document.body.querySelector('#employee-name-error');
const employeeSurnameError = document.body.querySelector('#surname-error');
const employeeNameInput = document.body.querySelector('#employee-name');
const employeeSurameInput = document.body.querySelector('#surname');
const employeeDobInput = document.querySelector('#dob');
const employeeDobError = document.querySelector('#dob-error');
const employeePositionSelect = document.querySelector('#position');
const employeePositionError = document.querySelector('#position-error');
const employeeSelaryInput = document.querySelector('#salary');
const employeeSelaryError = document.querySelector('#salary-error');

addProjectBtn.addEventListener('click', function () {
  addProjectPanel.classList.add('open');
  cancelProjectBtnForm.classList.add('active');
});

cancelProjectBtnForm.addEventListener('click', function () {
  addProjectPanel.classList.remove('open');
});

function validateEmployeeName() {
  const value = employeeNameInput.value;
  const isValid = value.length >= 3 && /^[A-Za-z0-9\s]+$/.test(value);
  if (isValid) {
    employeeNameError.classList.remove('show');
  } else {
    employeeNameError.classList.add('show');
  }
}
employeeNameInput.addEventListener('input', validateEmployeeName);
employeeNameInput.addEventListener('blur', validateEmployeeName);
validateEmployeeName();

function validateEmployeeSurname() {
  const value = employeeSurameInput.value;
  const isValid = value.length >= 2 && /^[A-Za-z0-9\s]+$/.test(value);
  if (isValid) {
    employeeSurnameError.classList.remove('show');
  } else {
    employeeSurnameError.classList.add('show');
  }
}
employeeSurameInput.addEventListener('input', validateEmployeeSurname);
employeeSurameInput.addEventListener('blur', validateEmployeeSurname);
validateEmployeeSurname();

function validateAge() {
  const dobValue = employeeDobInput.value;

  if (!dobValue) {
    employeeDobError.classList.add('show');
    employeeDobInput.classList.add('error');
    return;
  }
  const birthDate = new Date(dobValue);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (age >= 18) {
    employeeDobError.classList.remove('show');
    employeeDobInput.classList.remove('error');
  } else {
    employeeDobError.classList.add('show');
    employeeDobInput.classList.add('error');
  }
}

employeeDobInput.addEventListener('input', validateAge);
employeeDobInput.addEventListener('change', validateAge);
validateAge();

function validatePosition() {
  const selectedValue = employeePositionSelect.value;
  if (selectedValue && selectedValue !== '') {
    employeePositionError.classList.remove('show');
    employeePositionSelect.classList.remove('error');
    return true;
  } else {
    employeePositionError.classList.add('show');
    employeePositionSelect.classList.add('error');
    return false;
  }
}

employeePositionSelect.addEventListener('change', validatePosition);
employeePositionSelect.addEventListener('blur', validatePosition);
validatePosition();

function validatePositiveSelary() {
  let value = employeeSelaryInput.value;
  if (value === '') {
    employeeSelaryError.classList.add('show');
    return;
  }
  let num = parseFloat(value);
  if (isNaN(num) || num <= 0) {
    employeeSelaryError.classList.add('show');
    return;
  }
  const decimalPlaces = (value.split('.')[1] || '').length;
  if (decimalPlaces > 2) {
    employeeSelaryError.classList.add('show');
    return;
  }
  employeeSelaryError.classList.remove('show');
}
employeeSelaryInput.addEventListener('input', validatePositiveSelary);
employeeSelaryInput.addEventListener('blur', validatePositiveSelary);
validatePositiveSelary();
