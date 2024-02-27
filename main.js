"use strict";
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");
// const hamBurgerIcon = document.querySelector(".icon-hamburger");
// const closeIcon = document.querySelector(".icon-close");
// console.log(navToggle.firstElementChild);

navToggle.addEventListener("click", () => {
  primaryNavigation.classList.toggle("opened");
  primaryHeader.toggleAttribute("data-overlay");
  // if (primaryNavigation.classList.contains("opened")) {
  //   console.log(navToggle.firstElementChild);
  //   hamBurgerIcon.classList.add("visually-hidden");
  //   closeIcon.style.display = "block";
  // }
});
