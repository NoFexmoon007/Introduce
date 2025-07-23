const searchForm = document.getElementById('search-bar-container');
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
      alert(`คุณกำลังค้นหาคำว่า: ${searchTerm}`);
    }
});