const themeToggle = document.querySelectorAll("#theme-toggle");
const theme = document.documentElement;

// Toggle icons
var themeToggleDarkIcon = document.querySelectorAll("#theme-toggle-dark-icon");
var themeToggleLightIcon = document.querySelectorAll("#theme-toggle-light-icon");

// Tech Stack Icons
const svgs = document.querySelectorAll("svg");



// Function to toggle Tech Stack Icons
const toggleSvg = (svg) => {
  let newFill = theme.classList.contains("dark") ? "#a7a7a7" : "#42446E";
  svg.setAttribute("fill", newFill);
};

// Function to toggle dark mode
const toggleDarkMode = () => {
  if (theme.classList.contains("dark")) {
    theme.classList.replace("dark", "light");
  } else if (theme.classList.contains("light")) {
    theme.classList.replace("light", "dark");
  }
  localStorage.setItem("theme", theme.classList.contains("dark") ? "dark": "light");

  svgs.forEach(toggleSvg);
};

// Check if user has previously set a theme preference
// or
// Determine initial theme based on system preference
const storedTheme = localStorage.getItem("theme");
if (
  storedTheme == "light" ||
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches)
) {
  theme.classList.replace("dark", "light");
}

svgs.forEach(toggleSvg);

// Toggle dark mode on button click
themeToggle.forEach((btn) => btn.addEventListener("click", toggleDarkMode));
