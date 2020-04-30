var cart = document.querySelectorAll('.cart');
var wrap = document.querySelector('.popup-wrap');

wrap.classList.remove("nojs");
wrap.classList.add("popup_hide");

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  wrap.classList.remove("popup_hide");
});
}

wrap.onclick = function(close) {
  if (close.target == wrap) {
    wrap.classList.toggle("popup_hide");
  }
}
// пока работает корявенько, при загрузке страницы вылетает попап
// потом попробую пофиксить
