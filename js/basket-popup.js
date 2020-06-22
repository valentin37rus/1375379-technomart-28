var basketpopup = document.querySelector(".basket-popup");
var basketclose = document.querySelector(".basket-close");
var basketlink = document.querySelectorAll(".catalog-item-buy"),
  index, button;


for (index = 0; index < basketlink.length; index++) {
  button = basketlink[index];
  button.addEventListener("click", clickHandler);
}

function clickHandler(event) {
  basketpopup.classList.add("modal-basket-show");
  event.preventDefault();
}

basketclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketpopup.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketpopup.classList.contains("modal-basket-show")) {
      evt.preventDefault();
      basketpopup.classList.remove("modal-basket-show");
    }
  }
});
