function validateForm() {
  var nameInput = document.querySelector('input[type="text"]');
  var emailInput = document.getElementById("email-input");
  var phoneInput = document.querySelector('input[type="number"]');

  if (nameInput.value.trim() === "") {
    alert("O campo de nome é obrigatório.");
  } else if (emailInput.value.trim() === "") {
    alert("O campo de email é obrigatório.");
  } else if (phoneInput.value.trim() === "") {
    alert("O campo de número de telefone é obrigatório.");
  }
}

function validateEmail() {
  var emailInput = document.getElementById("email-input");
  var emailErrorMessage = document.getElementById("email-error-message");
  var nextButton = document.getElementById("next");
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    emailInput.style.background = "#ffff";
    emailErrorMessage.style.display = "block";
    nextButton.disabled = true;
  } else {
    emailInput.style.borderColor = "";
    emailErrorMessage.style.display = "none";
    nextButton.disabled = false;
  }
}

function validatePhoneNumber() {
  var phoneInput = document.getElementById("phone-input");
  var phoneErrorMessage = document.getElementById("phone-error-message");
  var nextButton = document.getElementById("next");
  var phoneNumber = phoneInput.value;
  var phoneRegex = /^\d{11}$/; // Este exemplo assume que um número de telefone deve ter 10 dígitos.

  if (!phoneRegex.test(phoneNumber)) {
    phoneInput.style.borderColor = "hsl(354, 100%, 66%)";
    phoneInput.style.background = "#ffff";
    phoneErrorMessage.style.display = "block";
    nextButton.disabled = true;
  } else {
    phoneInput.style.borderColor = "";
    phoneErrorMessage.style.display = "none";
    nextButton.disabled = false;
  }
}

const planLabels = document.querySelectorAll(".plan");

planLabels.forEach((label) => {
  label.addEventListener("click", function () {
    planLabels.forEach((l) => {
      l.classList.remove("selected");
      l.style.cssText = ""; // Reset para as configurações padrão
    });

    label.classList.add("selected");
    label.style.flexShrink = "0";
    label.style.borderRadius = "0.5rem";
    label.style.border = "1px solid var(--Purple, #483EFF)";
    label.style.background = "var(--Very-Light-Grey, #F8F9FF)";
  });
});

const addonDivs = document.querySelectorAll(".typeOfAddon");

addonDivs.forEach((div) => {
  const checkbox = div.querySelector("input[type='checkbox']");

  // Adicione um evento de mudança para o input
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      div.classList.add("selected");
      div.style.flexShrink = "0";
      div.style.borderRadius = "0.5rem";
      div.style.border = "1px solid var(--Purple, #483EFF)";
      div.style.background = "var(--Very-Light-Grey, #F8F9FF)";
    } else {
      div.classList.remove("selected");
      div.style.flexShrink = "";
      div.style.borderRadius = "";
      div.style.border = "";
      div.style.background = "";
    }
  });
});
