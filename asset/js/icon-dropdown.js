/* ==================================================
  ICON / MODE DROPDOWN
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".mode-dropdown");
  const modeItems = document.querySelectorAll("[data-mode]");
  const modeIcon = document.querySelector(".mode-dropdown .icon-item-logo i");

  /* ----------------------------------------------
    Helper: Tutup semua dropdown
  ---------------------------------------------- */
  const closeAllDropdowns = () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  };

  /* ----------------------------------------------
    Toggle dropdown
  ---------------------------------------------- */
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".mode-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isActive = dropdown.classList.contains("active");

      closeAllDropdowns();
      dropdown.classList.toggle("active", !isActive);
    });
  });

  /* ----------------------------------------------
    Light / Dark Mode
  ---------------------------------------------- */
  modeItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const mode = item.dataset.mode;

      if (mode === "dark") {
        document.body.classList.add("dark");
        if (modeIcon) modeIcon.className = "fa-regular fa-moon";
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        if (modeIcon) modeIcon.className = "fa-regular fa-sun";
        localStorage.setItem("theme", "light");
      }

      closeAllDropdowns();
    });
  });

  /* ----------------------------------------------
    Load theme saat refresh
  ---------------------------------------------- */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (modeIcon) modeIcon.className = "fa-regular fa-moon";
  }

  /* ----------------------------------------------
    Klik di luar → tutup semua
  ---------------------------------------------- */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".mode-dropdown")) {
      closeAllDropdowns();
    }
  });
});
