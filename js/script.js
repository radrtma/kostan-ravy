// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");
// hamburger menu di klik
const navbarBg = document.querySelector(".navbar-bg");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  navbarBg.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
