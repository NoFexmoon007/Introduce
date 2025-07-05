const toggleButton = document.getElementById('Theme-toggles');


const body = document.body;

function switchTheme() {

    toggleButton.classList.toggle('active');
    body.classList.toggle('dark-mode');
}

toggleButton.addEventListener('click', switchTheme);
