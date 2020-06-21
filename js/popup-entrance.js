var formmessage = document.querySelector(".button-right");
var formfeedback = document.querySelector(".form-feedback");
var formclose = document.querySelector(".feedback-close");
var clientname = document.querySelector(".client-name");
var formclient = document.querySelector(".form-client");
var clientemail = document.querySelector(".client-email");

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


