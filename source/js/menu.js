var menuButton = document.querySelector('.header__toggle');
var nav = document.querySelector('.main-nav');
var userList = document.querySelector('.user-list');

menuButton.classList.remove('header__toggle--nojs');
nav.classList.remove('main-nav--nojs');
userList.classList.remove('user-list--nojs');

menuButton.onclick = function() {
  menuButton.classList.toggle('header__toggle--active');
  nav.classList.toggle('main-nav--active');
  userList.classList.toggle('user-list--active');

  if (nav.classList.contains('main-nav--active')) {
    menuButton.setAttribute('aria-label', 'закрыть меню')
  } else {
    menuButton.setAttribute('aria-label', 'открыть меню')
  }
}
