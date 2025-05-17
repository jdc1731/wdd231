const hamburgerElement = document.querySelector('#myButton');
const navMenu = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // hamburgerElement.classList.toggle('open');
});