(() => {
  const ocToggles = document.querySelectorAll(".oc-toggle");

  ocToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const ocItem = this.closest(".oc-item");

      // Tutup item lain (accordion)
      document.querySelectorAll(".oc-item").forEach((item) => {
        if (item !== ocItem) {
          item.classList.remove("oc-open");
        }
      });

      ocItem.classList.toggle("oc-open");
    });
  });
})();
