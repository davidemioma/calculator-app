"use strict";

//Selectors
const themeOne = document.querySelector(".one");
const themeTwo = document.querySelector(".two");
const themeThree = document.querySelector(".three");
const body = document.querySelector("body");
const calcLogo = document.querySelector(".logo");
const numbers = document.querySelector(".num_theme");
const themeText = document.querySelector(".theme_text");
const togglerBackground = document.querySelector(".toggler");
const screen = document.querySelector(".screen");
let input = document.querySelector(".value");
const allNumbers = document.querySelectorAll(".num");
const resetBtn = document.querySelector(".reset");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.querySelector(".equal");
const keypads = document.querySelector(".keypads");

//EventListeners
themeOne.addEventListener("click", function (e) {
  themeOne.classList.add("active");
  themeThree.classList.remove("active");
  themeTwo.classList.remove("active");
  removeTheme("theme2", "theme3");
});

themeTwo.addEventListener("click", function (e) {
  themeOne.classList.remove("active");
  themeThree.classList.remove("active");
  themeTwo.classList.add("active");
  changeTheme("theme2");
});

themeThree.addEventListener("click", function (e) {
  themeOne.classList.remove("active");
  themeThree.classList.add("active");
  themeTwo.classList.remove("active");
  changeTheme("theme3");
});

//Functions
function del() {
  input.value = input.value.substring(0, input.value.length - 1);
}

function changeTheme(theme) {
  body.classList.add(theme);
  calcLogo.classList.add(theme);
  numbers.classList.add(theme);
  themeText.classList.add(theme);
  togglerBackground.classList.add(theme);
  screen.classList.add(theme);
  input.classList.add(theme);
  resetBtn.classList.add(theme);
  deleteBtn.classList.add(theme);
  equalsBtn.classList.add(theme);
  keypads.classList.add(theme);
  allNumbers.forEach((num) => num.classList.add(theme));
}

function removeTheme(theme1, theme2) {
  body.classList.remove(theme1, theme2);
  calcLogo.classList.remove(theme1, theme2);
  numbers.classList.remove(theme1, theme2);
  themeText.classList.remove(theme1, theme2);
  togglerBackground.classList.remove(theme1, theme2);
  screen.classList.remove(theme1, theme2);
  input.classList.remove(theme1, theme2);
  resetBtn.classList.remove(theme1, theme2);
  deleteBtn.classList.remove(theme1, theme2);
  equalsBtn.classList.remove(theme1, theme2);
  keypads.classList.remove(theme1, theme2);
  allNumbers.forEach((num) => num.classList.remove(theme1, theme2));
}
