// JavaScript to toggle navbar menu visibility
const burger = document.getElementById("icon");
const navbarLinks = document.getElementById("navbar-links");
const viewContainer = document.querySelector(".view-container");

burger.addEventListener("click", () => {
  burger.innerHTML = navbarLinks.classList.contains("hidden")
    ? `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>`
    : `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>`;
  // Increase the space below the viewContainer so it doesn't overlap with the elements below it overlap
  viewContainer.classList.toggle("mb-40");
  navbarLinks.classList.toggle("hidden");
});
