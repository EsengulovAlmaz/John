const blog = document.querySelector(".blog");
const work = document.querySelector(".works");

blog.addEventListener("click", () => {
    window.open("../blog.html", "_self");
})
work.addEventListener("click", () => {
    window.open("../work.html", "_self");
})