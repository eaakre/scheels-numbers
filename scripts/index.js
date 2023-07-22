let min = 1;
let max = 100;
let company = "SCHEELS";
let extension = ".COM";

const introSection = document.querySelector(".intro");

// Select input buttons and output area for data
const inputs = document.querySelector(".inputs");
const inputsRun = inputs.querySelector("#inputs__run");
const inputsReset = inputs.querySelector("#inputs__reset");
const output = document.querySelector(".output");
const outputList = output.querySelector(".output__list");
const outputListItems = output.querySelectorAll(".output__list-item");

// function to print number on new line in index.html
function addItem(text, location) {
  const listItem = document.createElement("li");
  listItem.classList.add("output__list-item");
  listItem.textContent = text;
  location.append(listItem);
}

// function to clear data from index.html
function resetOutput() {
  introSection.style.display = "flex";
  inputsRun.classList.add("inputs__button_max-width");
  inputsReset.classList.add("inputs__button_max-width");
  outputList.textContent = "";
}

// loop through numbers and determine output
inputsRun.addEventListener("click", () => {
  outputList.textContent = "";
  introSection.style.display = "none";
  inputsRun.classList.remove("inputs__button_max-width");
  inputsReset.classList.remove("inputs__button_max-width");
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      addItem(company + extension, outputList);
    } else if (i % 3 === 0) {
      addItem(company, outputList);
    } else if (i % 5 === 0) {
      addItem(extension, outputList);
    } else {
      addItem(i, outputList);
    }
  }
});

// call reset function on button click
inputsReset.addEventListener("click", resetOutput);

// select modal features for About button/link
const infoModal = document.getElementById("info-modal");
const infoButton = document.querySelector(".header__info");
const infoClose = document.getElementById("info-close");

// function to open About modal
function openAbout() {
  infoModal.style.display = "flex";
}

// funtion to open Settings modal
function openSettings() {
  settingsModal.style.display = "flex";
  settingsMin.value = min;
  settingsMax.value = max;
  settingsCompany.value = company;
  settingsExtension.value = extension;
}

// call function to open About modal via icon
infoButton.addEventListener("click", openAbout);

// close About modal through close button click
infoClose.addEventListener("click", () => {
  infoModal.style.display = "none";
});

// Select elements for Settings modal
const settingsModal = document.getElementById("settings-modal");
const settingsButton = document.querySelector(".header__settings");
const settingsClose = document.getElementById("settings-close");
const settingsForm = document.querySelector(".form");
const settingsMin = document.getElementById("min");
const settingsMax = document.getElementById("max");
const settingsCompany = document.getElementById("company");
const settingsExtension = document.getElementById("extension");
const settingsFormError = document.querySelector(".form__error");

// call function to open Settings modal via icon
settingsButton.addEventListener("click", openSettings);

// close Settings modal through close button click
settingsClose.addEventListener("click", () => {
  settingsModal.style.display = "none";
  settingsFormError.style.display = "none";
});

// function to check for valid number inputs
function checkNumbers(num1, num2) {
  if (num1 <= num2) {
    return true;
  } else {
    return false;
  }
}

// save and submit new settings on Settings modal
settingsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkNumbers(Number(settingsMin.value), Number(settingsMax.value))) {
    min = Number(settingsMin.value);
    max = Number(settingsMax.value);
    company = settingsCompany.value;
    extension = settingsExtension.value;
    resetOutput();
    settingsFormError.style.display = "none";
    settingsModal.style.display = "none";
  } else {
    settingsFormError.style.display = "block";
  }
});
