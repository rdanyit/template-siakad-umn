document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".custom-select");

  selects.forEach((select) => {
    select.addEventListener("change", function () {
      console.log("Dipilih:", this.value);
    });

    select.addEventListener("focus", function () {
      this.style.backgroundColor = "#ffffff";
    });

    select.addEventListener("blur", function () {
      this.style.backgroundColor = "#f8f9fb";
    });
  });
});

document.querySelectorAll(".collapsible").forEach((row) => {
  row.addEventListener("click", () => {
    const level = parseInt(row.dataset.level);
    const arrow = row.querySelector(".arrow");

    let next = row.nextElementSibling;
    let collapsed = arrow.textContent === "▼";

    arrow.textContent = collapsed ? "▶" : "▼";

    while (next && parseInt(next.dataset.level) > level) {
      next.style.display = collapsed ? "none" : "";
      next = next.nextElementSibling;
    }
  });
});
