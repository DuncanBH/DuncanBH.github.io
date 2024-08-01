const dialog = document.querySelector("dialog");
const openButton = document.getElementById("openResumeButton");
const closeButtons = document.querySelectorAll("dialog, dialog button");
const modalContents = document.querySelector(".modal-contents")

function openDialog() {
    dialog.showModal();
    dialog.style.opacity = "1"
}

openButton.addEventListener("click", openDialog);

function closeDialog() {
    dialog.close();
}

closeButtons.forEach((element) => element.addEventListener("click", () => {
    dialog.style.opacity = "0";
    setTimeout(closeDialog, 300)
}));

modalContents.addEventListener("click", (event) => event.stopPropagation())