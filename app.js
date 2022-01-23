const navBar = document.getElementById('nav-items');
const button = document.getElementById('toggle-button');


button.addEventListener('click', () => {
    navBar.style.left = '0%';
})

function menuButton() {
    navBar.style.width = '100%';
}


function closeNav() {
    navBar.style.width = '0%';
    navBar.style.left = '-100%';
}
