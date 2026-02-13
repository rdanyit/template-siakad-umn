const akmakt = document.getElementById("akmakt-chart");

const chartakt = new Chart(akmakt, {
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
const toggleAkt = document.getElementById("chartAKTToggle");
const dropdownAkt = document.getElementById("chartAKTDropdown");

toggleAkt.addEventListener("click", () => {
  dropdownAkt.style.display =
    dropdownAkt.style.display === "block" ? "none" : "block";
});

document.getElementById("downloadAKTPNG").addEventListener("click", () => {
  const linkakt = document.createElement("a");
  linkakt.href = chartakt.toBase64Image();
  linkakt.download = "akm-chart.png";
  linkakt.click();
});

document.getElementById("downloadAKTJPG").addEventListener("click", () => {
  const linkakt = document.createElement("a");
  linkakt.href = chartakt.toBase64Image("image/jpeg", 1);
  linkakt.download = "akm-chart.jpg";
  linkakt.click();
});

const legendContainerAkt = document.getElementById("chartAKTLegend");

chartakt.data.datasets.forEach((dataset, index) => {
  const pillakt = document.createElement("div");
  pillakt.className = "legend-pill";
  pillakt.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pillakt.onclick = () => {
    const meta = chartakt.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null ? !chartakt.data.datasets[index].hidden : null;

    pillakt.classList.toggle("legend-inactive");

    chartakt.update();
  };

  legendContainerAkt.appendChild(pillakt);
});
