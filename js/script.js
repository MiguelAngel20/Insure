// Variables declaration
const toggleButton = document.getElementById('buttonMenu');
const imgToggleButton = document.querySelector('#buttonMenu img');
const menu = document.querySelector('header nav ul');
const main = document.querySelector('body main.main');
let isClosed = true;
// End of variables declaration

// Listeners declaration
toggleButton.addEventListener('click', showMenu);
// End of listeners declaration

/**
 * Functions
 */
function showMenu() {
    if (isClosed) {
        imgToggleButton.src = '../images/icon-close.svg';
        menu.style.display = 'block';
        main.style.display = 'none';
        isClosed = false;
    } else {
        imgToggleButton.src = '../images/icon-hamburger.svg';
        menu.style.display = 'none';
        main.style.display = 'block';
        isClosed = true;
    }
}
