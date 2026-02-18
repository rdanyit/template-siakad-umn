// Collapse Filter
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".acc-item");

  items.forEach((item) => {
    const header = item.querySelector(".acc-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((i) => i.classList.remove("active"));

      if (!isActive) item.classList.add("active");
    });
  });
});

// Collapse List
document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".icon-list");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".list-acc");
      parent.classList.toggle("active");
    });
  });
});

// Tabel Mahasiswa
document.addEventListener("DOMContentLoaded", () => {
  const keywordInput = document.getElementById("keywordmhs");
  const filterSelect = document.getElementById("filterItem");
  const table = document.getElementById("tabelMahsiswa");
  const tbody = table.querySelector("tbody");

  function filterTable() {
    const keyword = keywordInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    const rows = tbody.querySelectorAll("tr");

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      let match = false;

      if (filterValue) {
        const colIndex = getColumnIndex(filterValue);

        if (colIndex !== -1 && cells[colIndex]) {
          const cellText = cells[colIndex].textContent.toLowerCase();
          match = cellText.includes(keyword);
        }
      } else {
        cells.forEach((cell) => {
          const cellText = cell.textContent.toLowerCase();
          if (cellText.includes(keyword)) match = true;
        });
      }

      row.style.display = match ? "" : "none";
    });
  }

  function getColumnIndex(filterValue) {
    const headers = table.querySelectorAll("thead th");

    for (let i = 0; i < headers.length; i++) {
      const headerText = headers[i].textContent.trim();

      if (
        headerText === filterValue ||
        headerText.replace(/\s+/g, "-") === filterValue
      ) {
        return i;
      }
    }

    return -1;
  }

  keywordInput.addEventListener("input", filterTable);
  filterSelect.addEventListener("change", filterTable);
});

// Show Box
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnFilter");
  const btnShow = document.getElementById("btnShowFilter");
  const panel = document.getElementById("filterdata");

  btn.addEventListener("click", () => {
    if (panel.style.display === "none") {
      panel.style.display = "block";
      btnShow.style.display = "none";
    } else {
      panel.style.display = "none";
      btnShow.style.display = "block";
    }
  });

  btnShow.addEventListener("click", () => {
    if (panel.style.display === "none") {
      panel.style.display = "block";
      btnShow.style.display = "none";
    } else {
      panel.style.display = "none";
      btnShow.style.display = "block";
    }
  });
});

// Filter Pegawai
document.addEventListener("DOMContentLoaded", () => {
  const selectInput = document.getElementById("selectPeriodeInput");
  const dropdown = document.getElementById("selectPeriodeDropdown");
  const options = document.querySelectorAll(".selectPeriode-options .option");
  const label = document.getElementById("selectPeriodeLabel");
  const table = document.getElementById("tabelMahsiswa");
  const rows = table.querySelectorAll("tbody tr");

  /* ===== Toggle Dropdown ===== */
  selectInput.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  /* ===== Klik Option ===== */
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedText = option.textContent.trim();

      label.textContent = selectedText;
      dropdown.classList.remove("show");

      filterTableByStatus(selectedText);
    });
  });

  /* ===== Filter Logic ===== */
  function filterTableByStatus(status) {
    rows.forEach((row) => {
      const statusCell = row.children[5]; // kolom Status (index ke-6)

      if (!status || status === "Pilih Status") {
        row.style.display = "";
        return;
      }

      const cellText = statusCell.textContent.trim().toLowerCase();
      const filterText = status.toLowerCase();

      if (cellText.includes(filterText)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  /* ===== Klik di luar → Tutup Dropdown ===== */
  document.addEventListener("click", (e) => {
    if (!selectInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});

// modals
const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const closeBtn2 = document.getElementById("closeModal2");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

function closeModal() {
  modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Status
document.addEventListener("DOMContentLoaded", () => {
  initStatusFilter();
});

function initStatusFilter() {
  const filters = document.querySelectorAll(".status-filter");

  filters.forEach((filter) => {
    const select = filter.querySelector(".status-select");
    const targetSelector = filter.dataset.target;
    const table = document.querySelector(targetSelector);

    if (!select || !table) return;

    select.addEventListener("change", () => {
      const value = select.value.toLowerCase();
      const rows = table.querySelectorAll("tbody tr");

      rows.forEach((row) => {
        const statusCell = row.querySelector("[data-status]");
        if (!statusCell) return;

        const statusValue = statusCell.dataset.status.toLowerCase();

        if (!value || statusValue === value) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
}

// kalender status
document.addEventListener("DOMContentLoaded", () => {
  initFilterPanel();
});

function initFilterPanel() {
  const panels = document.querySelectorAll(".filter-panel");

  panels.forEach((panel) => {
    const selects = panel.querySelectorAll(".filter-select");
    const checkboxes = panel.querySelectorAll(".filter-checkbox");

    selects.forEach((select) => {
      select.addEventListener("change", () => {
        console.log("Select berubah:", select.value);
        // Tambahkan logic filter tabel / ajax / dll di sini
      });
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        console.log("Checkbox:", checkbox.checked);
        // Logic filter data di sini
      });
    });
  });
}

// Monitoring
const periode = document.getElementById("periode");
const bulan = document.getElementById("bulan");

periode.addEventListener("change", () => {
  console.log("Periode dipilih:", periode.value);
});

bulan.addEventListener("change", () => {
  console.log("Bulan dipilih:", bulan.value);
});
