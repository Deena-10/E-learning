// search.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const courseCards = document.querySelectorAll(".course-card");
  
    searchInput.addEventListener("keyup", () => {
      const searchText = searchInput.value.toLowerCase();
      courseCards.forEach((card) => {
        const title = card.getAttribute("data-title").toLowerCase();
        card.style.display = title.includes(searchText) ? "flex" : "none";
      });
    });
  });
  