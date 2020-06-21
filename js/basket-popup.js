var basketlink = document.querySelectorAll(".catalog-item-buy");

var basketpopup = document.querySelector(".basket-popup");
var basketclose = mapPopup.querySelector(".basket-close");

basketlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketpopup.classList.add("modal-basket-show");
});

basketclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketpopup.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-basket-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-basket-show");
    }
  }
});
