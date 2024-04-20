// Script for navigation bar
const bar = document.querySelector("#bar");
const nav = document.querySelector(".navbar");

const user = document.querySelector(".user");
const dash = document.querySelector(".dash-box");

bar.addEventListener("click", () => {
    nav.classList.toggle("open");
    bar.classList.toggle("bx-x");
});

user.addEventListener("click", () => {
    dash.classList.toggle("open");
});

window.onscroll = () => {
    dash.classList.remove("open");
};