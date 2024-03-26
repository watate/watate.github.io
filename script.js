aboutButton = document.getElementById("about-button");
readingsButton = document.getElementById("readings-button");
aboutSection = document.getElementById("about");
readingsSection = document.getElementById("readings");

function hideContent(content) {
    content.classList.add("hide");
}

function showContent() {
    content.classList.remove("hide");
}