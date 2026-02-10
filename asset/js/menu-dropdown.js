/* ==================================================
  MENU DROPDOWN (TOP BAR)
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".title-dropdown");
  const dropdownItems = document.querySelectorAll(".item-menu-dropdown");

  /* ----------------------------------------------
    Helper: Tutup semua dropdown menu
  ---------------------------------------------- */
  const closeAllMenus = () => {
    dropdownItems.forEach((item) => {
      item.classList.remove("active");
    });
  };

  /* ----------------------------------------------
    Toggle menu dropdown
  ---------------------------------------------- */
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const parent = toggle.closest(".item-menu-dropdown");
      if (!parent) return;

      const isActive = parent.classList.contains("active");

      closeAllMenus();
      parent.classList.toggle("active", !isActive);
    });
  });

  /* ----------------------------------------------
    Klik di luar menu → tutup semua
  ---------------------------------------------- */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".item-menu-dropdown")) {
      closeAllMenus();
    }
  });

  /* ----------------------------------------------
    Resize → reset dropdown
  ---------------------------------------------- */
  window.addEventListener("resize", closeAllMenus);
});
