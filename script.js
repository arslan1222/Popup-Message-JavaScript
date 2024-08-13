let button = document.getElementById('btn');
let popup = document.querySelector('.popup');

function showPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

button.onclick = showPopup;

