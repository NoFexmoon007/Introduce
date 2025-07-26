(() => {
    const toggleButton = document.getElementById('Theme-toggles');
    const body = document.body;
    const header = document.querySelector('header');
    const white = document.querySelectorAll('header nav ul li a');

    const searchBar = document.getElementById('search-bar-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const formBackground = document.getElementById('search-form');
    const MID = document.getElementById('header-title');



    function switchTheme() {                                                                  
        toggleButton.classList.toggle('dark-mode');
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        white.forEach(function (link) {
            link.classList.toggle('fontwhite');
        });

        searchBar.classList.toggle('dark-mode');
        searchInput.classList.toggle('dark-mode');
        searchButton.classList.toggle('dark-mode');
        formBackground.classList.toggle('dark-mode');
        MID.classList.toggle('dark-mode');
    }

    toggleButton.addEventListener('click', switchTheme);
})();
