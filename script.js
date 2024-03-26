const aboutButton = document.getElementById("about-button");
const readingsButton = document.getElementById("readings-button");
const aboutSection = document.getElementById("about");
const readingsSection = document.getElementById("readings");
const photoSection = document.getElementById("photo");

function hideContent(content) {
    content.classList.add("hide");
}

function showContent(content) {
    content.classList.remove("hide");
}

function onAboutButtonClick() {
    showContent(aboutSection);
    showContent(photoSection);
    hideContent(readingsSection);
}

function onReadingsButtonClick() {
    showContent(readingsSection);
    hideContent(aboutSection);
    hideContent(photoSection);
}

aboutButton.addEventListener("click", onAboutButtonClick);
readingsButton.addEventListener("click", onReadingsButtonClick);