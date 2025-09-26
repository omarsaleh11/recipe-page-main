const logo = document.getElementById("logo");
const logoImgLm = document.getElementById("logo-lm");
const logoImgDm = document.getElementById("logo-dm");
const about = document.getElementById("about");
const removeEvents = document.getElementById("remove-events");
const main = document.getElementById("main");
let darkModeStorge = localStorage.getItem("darkMode");
const darkModeBtn = document.getElementById("dark-mode");
const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");

logo.addEventListener("click", logoClicked);
function logoClicked() {
 about.classList.toggle("none");
}
removeEvents.addEventListener("click", () => {
 about.classList.add("none");
});
colorSchemeQueryList.addEventListener("change", setColorScheme);
const enableDarkMode = () => {
 document.documentElement.classList.add("dark-mode");
 darkModeBtn.textContent = "light mode";
 logoImgDm.classList.remove("none");
 logoImgLm.classList.add("none");
 localStorage.setItem("darkMode", "enabled");
};
const desableDarkMode = () => {
 document.documentElement.classList.remove("dark-mode");
 darkModeBtn.textContent = "dark mode";
 logoImgDm.classList.add("none");
 logoImgLm.classList.remove("none");
 localStorage.setItem("darkMode", null);
};
const setColorScheme = e => {
 if (e.matches) {
  // Dark
  enableDarkMode();
 } else {
  // Light
  desableDarkMode();
 }
};
if (darkModeStorge === "enabled") {
 enableDarkMode();
}
darkModeBtn.addEventListener("click", () => {
 darkModeStorge = localStorage.getItem("darkMode");
 if (darkModeStorge !== "enabled") {
  enableDarkMode();
 } else {
  desableDarkMode();
 }
});
