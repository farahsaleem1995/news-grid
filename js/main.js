// Get browser Viewport Width, Viewport  Height
let vpWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
let vpHeight = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);

const mainNavContainer = document.querySelector("#main-nav .container");
const logo = document.querySelector(".logo");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  navHeight = mainNavContainer.scrollHeight;
  navHeight = navHeight / 16;
  navHeight += 0.5;

  let svg = document.querySelector("#main-nav .top .menu-btn svg");
  let paths = document.querySelectorAll("#main-nav .top .menu-btn svg path");

  if (!mainNavContainer.classList.contains("active")) {
    mainNavContainer.style.maxHeight = navHeight + "rem";

    paths[0].setAttribute("d", "M0,10 20,24");
    paths[1].style.display = "none";
    paths[2].setAttribute("d", "M0,24 20,10");
  } else {
    mainNavContainer.style.maxHeight = 4 + "rem";

    paths[0].setAttribute("d", "M0,6 25,6");
    paths[1].style.display = "block";
    paths[2].setAttribute("d", "M0,20 25,20");
  }
  mainNavContainer.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
