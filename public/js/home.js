
function revealText(ID) {
    const element = document.getElementById(ID);
    if (element) {
        element.classList.toggle('visually-hidden');
    }
}
