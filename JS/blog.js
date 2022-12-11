const home = document.querySelector(".home");
const work = document.querySelector(".works");

home.addEventListener("click", () => {
    window.open("../index.html", "_self");
})
work.addEventListener("click", () => {
    window.open("../work.html", "_self");
})