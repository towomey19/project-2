// JS scripts placed here
const blueButton = document.getElementById('blue-bg');
const body = document.querySelector('body');

blueButton.addEventListener('click', () => {
    body.classList.toggle('blue');
});