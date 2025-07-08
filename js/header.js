const toggleButton = document.getElementById('Theme-toggles');
const body = document.body;
const header = document.querySelector('header');
const white = document.querySelectorAll('header nav ul li a');

function switchTheme() {

    toggleButton.classList.toggle('active');
    body.classList.toggle('dark-mode');
    header.classList.toggle('toggle');
    white.forEach(function (link) {
        link.classList.toggle('fontwhite');
    });
};  

toggleButton.addEventListener('click', switchTheme);
