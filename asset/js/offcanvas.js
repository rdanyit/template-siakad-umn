const tombolMenu = document.querySelector(".tombol-menu");
const offcanvasMenu = document.querySelector(".offcanvas-menu");
const overlay = document.querySelector(".offcanvas-overlay");
const tombolTutup = document.querySelector(".close-offcanvas");

function openOffcanvas() {
  offcanvasMenu.classList.add("active");
  overlay.classList.add("active");
}

function closeOffcanvas() {
  offcanvasMenu.classList.remove("active");
  overlay.classList.remove("active");
}

tombolMenu.addEventListener("click", openOffcanvas);
tombolTutup.addEventListener("click", closeOffcanvas);
overlay.addEventListener("click", closeOffcanvas);
