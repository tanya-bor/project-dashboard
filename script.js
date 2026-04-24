const burgerBtn = document.body.querySelector('#burger-btn');
const menuList = document.body.querySelector('.side-bar');
const openButton = document.body.querySelector('.open-button');

burgerBtn.addEventListener('click', function () {
  menuList.classList.add('close');
  openButton.classList.add('active');
});

openButton.addEventListener('click', function () {
  menuList.classList.remove('close');
  openButton.classList.remove('active');
});
