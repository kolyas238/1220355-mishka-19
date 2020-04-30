var cart = document.querySelector('.cart');
var wrap = document.querySelector('.popup-wrap');

wrap.classList.add("popup_hide");
cart.addEventListener("click", function(evt) {
evt.preventDefault();
wrap.classList.toggle("popup_hide");
});

wrap.onclick = function(close) {
  if (close.target == wrap) {
    wrap.classList.toggle("popup_hide");
  }
}
// пока работает корявенько, при загрузке страницы вылетает попап
// потом попробую пофиксить
