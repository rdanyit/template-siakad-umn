const openIcon = document.getElementById("openIcon");
const dropdownMenuMobile = document.getElementById("dropdownMenuMobile");

/* Toggle */
openIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenuMobile.classList.toggle("active");
});

/* Click outside close */
document.addEventListener("click", () => {
  dropdownMenuMobile.classList.remove("active");
});

/* Prevent bubbling */
dropdownMenuMobile.addEventListener("click", (e) => {
  e.stopPropagation();
});
