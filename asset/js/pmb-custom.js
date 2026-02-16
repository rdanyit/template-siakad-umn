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
    const isOpen = arrow.classList.contains("open");

    if (isOpen) {
      arrow.innerHTML = '<i class="fa-solid fa-caret-right"></i>';
      arrow.classList.remove("open");
    } else {
      arrow.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
      arrow.classList.add("open");
    }

    let next = row.nextElementSibling;

    while (next && parseInt(next.dataset.level) > level) {
      if (isOpen) {
        next.style.display = "none";

        const childArrow = next.querySelector(".arrow");
        if (childArrow) {
          childArrow.innerHTML = '<i class="fa-solid fa-caret-right"></i>';
          childArrow.classList.remove("open");
        }
      } else {
        if (parseInt(next.dataset.level) === level + 1) {
          next.style.display = "";
        }
      }

      next = next.nextElementSibling;
    }
  });
});
