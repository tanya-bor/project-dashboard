const addProjectBtn = document.body.querySelector('#add-project-btn');
const cancelProjectBtnForm = document.body.querySelector(
  '#cancel-project-btn-form',
);
const addProjectPanel = document.body.querySelector('#add-project-panel');

addProjectBtn.addEventListener('click', function () {
  addProjectPanel.classList.add('open');
  cancelProjectBtnForm.classList.add('active');
});

cancelProjectBtnForm.addEventListener('click', function () {
  addProjectPanel.classList.remove('open');
});
