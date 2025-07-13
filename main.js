// Handle mobile dropdown toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  // Highlight the active section link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      dropdownMenu.classList.remove("show");
    });
  });
});
