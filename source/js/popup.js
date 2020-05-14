var cart = document.querySelectorAll('.cart-js');
var wrap = document.querySelector('.popup-wrap');

wrap.classList.remove('nojs');
wrap.classList.add('popup--hide');

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    wrap.classList.remove('popup--hide');
    wrap.classList.remove('popup-wrap--position');
  });
}

wrap.onclick = function(close) {
  if (close.target == wrap) {
    wrap.classList.toggle('popup--hide');
    wrap.classList.toggle('popup-wrap--position');
  }
}

document.body.addEventListener('keyup', function(e) {
  var key = e.keyCode;

  if (key == 27) {
    document.querySelector('.popup-wrap').classList.add('popup--hide');
  };
}, false);
