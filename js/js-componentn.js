var formmessage = document.querySelector(".button-right");
var formfeedback = document.querySelector(".form-feedback");
var formclose = document.querySelector(".feedback-close");
var clientname = document.querySelector(".client-name");
var formclient = document.querySelector(".form-client");
var clientemail = document.querySelector(".client-email");
var mapLink = document.querySelector(".popup-maps");
var mapPopup = document.querySelector(".index-map");
var mapClose = mapPopup.querySelector(".map-close");
var basketpopup = document.querySelector(".basket-popup");
var basketclose = document.querySelector(".basket-close");
var basketlink = document.querySelectorAll(".catalog-item-buy"),
  index, button;
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name-author");
} catch (err) {
  isStorageSupport = false;
}

formmessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  formfeedback.classList.add("modal-show");

  if (storage) {
    clientname.value = storage;
    clientemail.focus();
  } else {
    clientname.focus();
  }
});

formclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formfeedback.classList.remove("modal-show");
  formfeedback.classList.remove("modal-error");
});

formclient.addEventListener("submit", function (evt) {
  if (!clientname.value || !clientemail.value) {
    evt.preventDefault();
    formfeedback.classList.remove("modal-error");
    formfeedback.offsetWidth = formfeedback.offsetWidth;
    formfeedback.classList.add("modal-error");
  } else {
    localStorage.setItem("name-author", clientname.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formfeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      formfeedback.classList.remove("modal-show");
      formfeedback.classList.remove("modal-error");
    }
  }
});

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
