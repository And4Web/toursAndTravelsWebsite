let searchBtn = document.getElementById("search-btn");
let searchBar = document.querySelector(".search-bar-container");

let loginBtn = document.getElementById("login-btn");
let formClose = document.getElementById("form-close");
let loginForm = document.querySelector(".login-form-container");

let menuBtn = document.getElementById("menu-bar");
let navBar = document.querySelector(".navbar");

let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
