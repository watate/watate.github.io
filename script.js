const aboutButton = document.getElementById("about-button");
const readingsButton = document.getElementById("readings-button");
const projectsButton = document.getElementById("projects-button");
const aboutSection = document.getElementById("about");
const readingsSection = document.getElementById("readings");
const photoSection = document.getElementById("photo");
const projectsSection = document.getElementById("projects");

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
    hideContent(projectsSection);
    window.location.hash = 'photo';
}

function onReadingsButtonClick() {
    showContent(readingsSection);
    hideContent(aboutSection);
    hideContent(photoSection);
    hideContent(projectsSection);
    window.location.hash = 'readings';
}

function onProjectsButtonClick() {
    showContent(projectsSection);
    hideContent(aboutSection);
    hideContent(photoSection);
    hideContent(readingsSection);
    window.location.hash = 'projects';
}

document.addEventListener('DOMContentLoaded', (event) => {
    aboutButton.addEventListener("click", onAboutButtonClick);
    readingsButton.addEventListener("click", onReadingsButtonClick);
    projectsButton.addEventListener("click", onProjectsButtonClick);
});