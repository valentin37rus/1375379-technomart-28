var mapLink = document.querySelector(".popup-maps");

var mapPopup = document.querySelector(".index-map");
var mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
    }
  }
});
