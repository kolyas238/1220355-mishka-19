let nav = document.querySelector('.main-nav');
let userList = document.querySelector('.user-list');
let menuButton = document.querySelector('.header__toggle');

menuButton.onclick = function() {
  nav.classList.toggle('close');
  userList.classList.toggle('close');
}
