const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById("search-input");

searchBar.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
      // แทนที่จะส่งไป Google เราจะแสดงเป็นกล่องข้อความแทน
      alert(`คุณกำลังค้นหาคำว่า: ${searchTerm}`);
    }
});