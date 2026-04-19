document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navbarToggle");
    const menu = document.getElementById("navbarMenu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("navbar__menu--open");
    });
});

const toolOptions = document.querySelectorAll(".tool-option");
const toolPreviewImage = document.getElementById("toolPreviewImage");

toolOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const newImage = option.getAttribute("data-image");
        const newTitle = option.getAttribute("data-title");

        toolPreviewImage.src = newImage;
        toolPreviewImage.alt = newTitle;

        toolOptions.forEach((item) => item.classList.remove("active"));
        option.classList.add("active");
    });
});
