const toggleButton = document.getElementById('Theme-toggles');
const body = document.body;
const header = document.querySelector('header');
const white = document.querySelectorAll('header nav ul li a');
const searchBar = document.getElementById('search-bar');
const searchBarDiv = document.getElementById('SearchBar');

// const searchBar = document.getElementById('search-bar');
// const searchInput = document.getElementById("search-input");
// const searchButton = document.querySelector('.search-bar button');

function switchTheme() {

    toggleButton.classList.toggle('active');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    white.forEach(function (link) {
        link.classList.toggle('fontwhite');
    });

    
    //searchBar.classList.toggle('dark-mode');
    //searchInput.classList.toggle('dark-mode');
    //searchButton.classList.toggle('dark-mode');
};  

toggleButton.addEventListener('click', switchTheme);
