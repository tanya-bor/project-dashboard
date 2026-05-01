const burgerBtn = document.body.querySelector('#burger-btn');
const menuList = document.body.querySelector('.side-bar');
const openButton = document.body.querySelector('.open-button');
const inputFilterName = document.getElementById('filter-input-name');
const acceptFilterCompanyBtn = document.body.querySelector(
  '#accept-filter-company',
);
const acceptFilterProjectBtn = document.body.querySelector(
  '#accept-filter-project',
);
const cancelCompanyFilterBtn = document.body.querySelector(
  '#cancel-company-filter',
);
const filterCompanyBtn = document.body.querySelector('#filter-company-name');
const searchCompanyModal = document.body.querySelector('#filter-company-popup');
const cancelProjectFilterBtn = document.body.querySelector(
  '#cancel-project-filter',
);
const filterProjectBtn = document.body.querySelector('#filter-project-name');
const searchProjectModal = document.body.querySelector('#filter-project-popup');

const addProjectBtn = document.body.querySelector('#add-project-btn');
const cancelProjectBtnForm = document.body.querySelector(
  '#cancel-project-btn-form',
);
const addProjectPanel = document.body.querySelector('#add-project-panel');
const seedDataPopup = document.body.querySelector('#seed-data-popup');
const seedDataBtn = document.body.querySelector('#seed-data-btn');
const closePopupBtnSeedData = document.body.querySelector(
  '#close-popup-btn-seed-data',
);
const projectNameError = document.body.querySelector('#project-name-error');
const companyNameError = document.body.querySelector('#company-name-error');
const projectBudgetError = document.body.querySelector('#project-budget-error');
const employeeCapacityError = document.body.querySelector(
  '#employee-capacity-error',
);
const projectNameInput = document.body.querySelector('#project-name');
const companyNameInput = document.body.querySelector('#company-name');
const projectBudgetInput = document.body.querySelector('#project-budget');
const employeeCapacityInput = document.body.querySelector('#employee-capacity');
let filterName = '';

burgerBtn.addEventListener('click', function () {
  menuList.classList.add('close');
  openButton.classList.add('active');
});

openButton.addEventListener('click', function () {
  menuList.classList.remove('close');
  openButton.classList.remove('active');
});

filterCompanyBtn.addEventListener('click', function (e) {
  searchCompanyModal.classList.toggle('active');
});

cancelCompanyFilterBtn.addEventListener('click', function (e) {
  searchCompanyModal.classList.remove('active');
});

filterProjectBtn.addEventListener('click', function (e) {
  searchProjectModal.classList.toggle('active');
});

cancelProjectFilterBtn.addEventListener('click', function (e) {
  searchProjectModal.classList.remove('active');
});

inputFilterName.addEventListener('input', function (e) {
  filterName = e.target.value;
});

acceptFilterCompanyBtn.addEventListener('click', function () {
  myFunction();
  searchCompanyModal.classList.remove('active');
});
acceptFilterProjectBtn.addEventListener('click', function () {
  myFunction();
});

function myFunction() {
  let filter, table, tr, td, i, txtValue;
  filter = filterName.toUpperCase();
  table = document.getElementById('Table');
  tr = table.getElementsByTagName('tr');

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
addProjectBtn.addEventListener('click', function () {
  addProjectPanel.classList.add('open');
  cancelProjectBtnForm.classList.add('active');
});

cancelProjectBtnForm.addEventListener('click', function () {
  addProjectPanel.classList.remove('open');
});

seedDataBtn.addEventListener('click', function (e) {
  seedDataPopup.classList.toggle('active');
});

closePopupBtnSeedData.addEventListener('click', function (e) {
  seedDataPopup.classList.remove('active');
});

function validateProjectName() {
  const value = projectNameInput.value;
  const isValid = value.length >= 3 && /^[A-Za-z0-9\s]+$/.test(value);
  if (isValid) {
    projectNameError.classList.remove('show');
  } else {
    projectNameError.classList.add('show');
  }
}
projectNameInput.addEventListener('input', validateProjectName);
projectNameInput.addEventListener('blur', validateProjectName);
validateProjectName();

function validateCompanyName() {
  const value = companyNameInput.value;
  const isValid = value.length >= 2 && /^[A-Za-z0-9\s]+$/.test(value);
  if (isValid) {
    companyNameError.classList.remove('show');
  } else {
    companyNameError.classList.add('show');
  }
}
companyNameInput.addEventListener('input', validateCompanyName);
companyNameInput.addEventListener('blur', validateCompanyName);
validateCompanyName();

function validatePositiveDecimal() {
  let value = projectBudgetInput.value;
  if (value === '') {
    projectBudgetError.classList.add('show');
    return;
  }
  let num = parseFloat(value);
  if (isNaN(num) || num <= 0) {
    projectBudgetError.classList.add('show');
    return;
  }
  const decimalPlaces = (value.split('.')[1] || '').length;
  if (decimalPlaces > 2) {
    projectBudgetError.classList.add('show');
    return;
  }
  projectBudgetError.classList.remove('show');
}
projectBudgetInput.addEventListener('input', validatePositiveDecimal);
projectBudgetInput.addEventListener('blur', validatePositiveDecimal);
validatePositiveDecimal();

function validatePositiveInteger() {
  const value = employeeCapacityInput.value;
  if (value === '') {
    employeeCapacityError.classList.add('show');
    employeeCapacityInput.classList.add('error');
    return;
  }
  const num = parseInt(value, 10);
  if (!isNaN(num) && Number.isInteger(num) && num >= 1) {
    employeeCapacityError.classList.remove('show');
    employeeCapacityInput.classList.remove('error');
  } else {
    employeeCapacityError.classList.add('show');
    employeeCapacityInput.classList.add('error');
  }
}

employeeCapacityInput.addEventListener('input', validatePositiveInteger);
employeeCapacityInput.addEventListener('blur', validatePositiveInteger);
validatePositiveInteger();
