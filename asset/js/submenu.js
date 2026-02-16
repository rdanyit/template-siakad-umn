document.addEventListener("DOMContentLoaded", () => {
  const submenuLinks = document.querySelectorAll(".has-submenu");

  submenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        const parent = link.parentElement;
        parent.classList.toggle("open");
      }
    });
  });
});
