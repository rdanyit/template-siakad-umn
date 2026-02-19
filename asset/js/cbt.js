const cbt = document.getElementById("cbt-chart");

const chartcbt = new Chart(cbt, {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Aktif",
        data: [0, 80, 400, 520, 600, 700],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Cuti",
        data: [0, 5, 10, 8, 7, 6],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Sedang Double Degree",
        data: [0, 2, 4, 3, 2, 2],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Kampus Merdeka",
        data: [0, 0, 6, 9, 7, 5],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Non Aktif",
        data: [0, 10, 12, 15, 14, 11],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Menunggu Ukom",
        data: [0, 0, 3, 4, 5, 3],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Tidak Memiliki AKM",
        data: [0, 1, 2, 1, 1, 1],
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Jumlah Mahasiswa",
        },
      },
      x: {
        title: {
          display: true,
          text: "Angkatan",
        },
      },
    },
  },
});

// BTN Download
const togglecbt = document.getElementById("chartcbtToggle");
const dropdowncbt = document.getElementById("chartcbtDropdown");

togglecbt.addEventListener("click", () => {
  dropdowncbt.style.display =
    dropdowncbt.style.display === "block" ? "none" : "block";
});

document.getElementById("downloadcbtPNG").addEventListener("click", () => {
  const linkcbt = document.createElement("a");
  linkcbt.href = chartcbt.toBase64Image();
  linkcbt.download = "cbt-chart.png";
  linkcbt.click();
});

document.getElementById("downloadcbtJPG").addEventListener("click", () => {
  const linkcbt = document.createElement("a");
  linkcbt.href = chartcbt.toBase64Image("image/jpeg", 1);
  linkcbt.download = "cbt-chart.jpg";
  linkcbt.click();
});

const legendContainercbt = document.getElementById("chartcbtLegend");

chartcbt.data.datasets.forEach((dataset, index) => {
  const pillcbt = document.createElement("div");
  pillcbt.className = "legend-pill";
  pillcbt.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pillcbt.onclick = () => {
    const meta = chartcbt.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null ? !chartcbt.data.datasets[index].hidden : null;

    pillcbt.classList.toggle("legend-inactive");

    chartcbt.update();
  };

  legendContainercbt.appendChild(pillcbt);
});

// tabel list
// PREFIX variabel cf_ untuk cegah konflik global
const cf_periode = document.getElementById("cf-periode");
const cf_ujian = document.getElementById("cf-ujian");
const cf_sesi = document.getElementById("cf-sesi");
const cf_ruang = document.getElementById("cf-ruang");
const cf_peserta = document.getElementById("cf-peserta");
const cf_format = document.getElementById("cf-format");
const cf_kop = document.getElementById("cf-kop");

const cf_btn_tampil = document.getElementById("cf-btn-tampil");
const cf_btn_tab = document.getElementById("cf-btn-tab");

function cf_getFilterData() {
  return {
    periode: cf_periode.value,
    ujian: cf_ujian.value,
    sesi: cf_sesi.value,
    ruang: cf_ruang.value,
    peserta: cf_peserta.value,
    format: cf_format.value,
    kop: cf_kop.checked,
  };
}

function cf_validateRequired(data) {
  if (!data.periode) {
    alert("Periode wajib dipilih");
    return false;
  }
  if (!data.ujian) {
    alert("Ujian wajib dipilih");
    return false;
  }
  return true;
}

cf_btn_tampil.addEventListener("click", () => {
  const cf_data = cf_getFilterData();
  if (!cf_validateRequired(cf_data)) return;

  console.log("Tampilkan:", cf_data);
  alert("Filter siap ditampilkan");
});

cf_btn_tab.addEventListener("click", () => {
  const cf_data = cf_getFilterData();
  if (!cf_validateRequired(cf_data)) return;

  const cf_query = new URLSearchParams(cf_data).toString();
  window.open("preview.html?" + cf_query, "_blank");
});

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

// Halaman Ujian
(() => {
  const cbt_questionBank = [
    {
      q_text: "Apa ibukota Indonesia?",
      q_options: ["Bandung", "Jakarta", "Surabaya", "Medan"],
    },
    {
      q_text: "Berapa hasil dari 5 × 5 ?",
      q_options: ["10", "20", "25", "30"],
    },
    {
      q_text: "Mana yang termasuk bahasa markup?",
      q_options: ["Python", "HTML", "Java", "C++"],
    },
    {
      q_text: "Perangkat input adalah?",
      q_options: ["Monitor", "Keyboard", "Speaker", "Printer"],
    },
    {
      q_text: "CSS digunakan untuk?",
      q_options: ["Logika program", "Desain tampilan", "Database", "Server"],
    },
  ];

  let cbt_activeIndex = 0;
  let cbt_userAnswers = new Array(cbt_questionBank.length).fill(null);

  const cbt_elQuestionText = document.getElementById("questionText");
  const cbt_elQuestionNumber = document.getElementById("questionNumber");
  const cbt_elOptionsWrap = document.getElementById("options");
  const cbt_elGrid = document.getElementById("questionGrid");

  function cbt_renderGrid() {
    cbt_elGrid.innerHTML = "";

    cbt_questionBank.forEach((_, idx) => {
      const cbt_btn = document.createElement("button");
      cbt_btn.textContent = idx + 1;

      if (cbt_userAnswers[idx] !== null) {
        cbt_btn.classList.add("answered");
      }

      cbt_btn.onclick = () => {
        cbt_activeIndex = idx;
        cbt_renderQuestion();
      };

      cbt_elGrid.appendChild(cbt_btn);
    });
  }

  function cbt_renderQuestion() {
    const cbt_currentQ = cbt_questionBank[cbt_activeIndex];

    cbt_elQuestionNumber.textContent = `Soal ${cbt_activeIndex + 1}`;
    cbt_elQuestionText.textContent = cbt_currentQ.q_text;

    cbt_elOptionsWrap.innerHTML = "";

    cbt_currentQ.q_options.forEach((opt, optIndex) => {
      const cbt_optionDiv = document.createElement("div");
      cbt_optionDiv.className = "option";
      cbt_optionDiv.textContent = opt;

      if (cbt_userAnswers[cbt_activeIndex] === optIndex) {
        cbt_optionDiv.classList.add("selected");
      }

      cbt_optionDiv.onclick = () => {
        cbt_userAnswers[cbt_activeIndex] = optIndex;
        cbt_renderGrid();
        cbt_renderQuestion();
      };

      cbt_elOptionsWrap.appendChild(cbt_optionDiv);
    });
  }

  document.getElementById("prevBtn").onclick = () => {
    if (cbt_activeIndex > 0) {
      cbt_activeIndex--;
      cbt_renderQuestion();
    }
  };

  document.getElementById("nextBtn").onclick = () => {
    if (cbt_activeIndex < cbt_questionBank.length - 1) {
      cbt_activeIndex++;
      cbt_renderQuestion();
    }
  };

  document.getElementById("submitBtn").onclick = () => {
    console.log("Jawaban Peserta:", cbt_userAnswers);
    alert("Ujian berhasil dikumpulkan!");
  };

  function cbt_startExamTimer(totalSeconds) {
    let cbt_remainingTime = totalSeconds;
    const cbt_timerDisplay = document.getElementById("timer");

    setInterval(() => {
      const mins = Math.floor(cbt_remainingTime / 60);
      const secs = cbt_remainingTime % 60;

      cbt_timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

      if (cbt_remainingTime > 0) cbt_remainingTime--;
    }, 1000);
  }

  cbt_renderGrid();
  cbt_renderQuestion();
  cbt_startExamTimer(30 * 60);
})();
