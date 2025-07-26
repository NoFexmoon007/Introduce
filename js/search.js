(() => {
    const searchFormEl = document.getElementById('search-form');
    const searchInputField = document.getElementById("search-input");

    searchFormEl.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = searchInputField.value.trim().toLowerCase();

        if (searchTerm) {
            alert(`คุณกำลังค้นหาคำว่า: ${searchTerm}`);
        }
    });
})();