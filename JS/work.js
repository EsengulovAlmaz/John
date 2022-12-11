const home = document.querySelector(".home");
const blog = document.querySelector(".blog");

home.addEventListener("click", () => {
    window.open("../index.html", "_self");
})
blog.addEventListener("click", () => {
    window.open("../blog.html", "_self");
})