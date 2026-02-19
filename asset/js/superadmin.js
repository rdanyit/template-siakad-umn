// =========================
// Chart Mahasiswa
// =========================
const mhsCanvas = document.getElementById("mhs-chart");

if (mhsCanvas) {
  const mhs = mhsCanvas.getContext("2d");

  const datamhs = {
    labels: ["Tidak ada data"],
    datasets: [
      {
        label: "Tidak ada data mahasiswa aktif pada periode 2025 Genap",
        data: [100],
        backgroundColor: ["rgba(35, 100, 240, 0.7)"],
        borderColor: ["rgba(35, 100, 240, 0.7)"],
        borderWidth: 2,
      },
    ],
  };

  const configmhs = {
    type: "doughnut",
    data: datamhs,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: 0 },
      plugins: {
        legend: {
          labels: {
            color: "#333", // ✅ warna valid
            font: {
              size: 12,
              weight: "bold",
            },
          },
        },
        tooltip: {
          enabled: true,
          backgroundColor: "#333",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "#fff",
          borderWidth: 1,
          cornerRadius: 10,
        },
      },
    },
  };

  new Chart(mhs, configmhs);
}

// =========================
// Tooltip (Aman dari Error)
// =========================
const icon = document.getElementById("infoIcon");
const tooltip = document.getElementById("tooltip");

if (icon && tooltip) {
  icon.addEventListener("mouseenter", (e) => {
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY - 30 + "px";
  });

  icon.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
}

// =========================
// Gauge / Realisasi
// =========================
const targetValue = 100;
const gaugeCanvas = document.getElementById("gaugeChart");
if (gaugeCanvas) {
  const gaugeChart = gaugeCanvas.getContext("2d");

  const datagaugeChart = {
    datasets: [
      {
        data: [targetValue, 100 - targetValue],
        backgroundColor: [
          "rgba(35, 240, 45, 0.7)",
          "rgba(125, 255, 108, 0.72))",
        ],
        borderWidth: 0,
        borderRadius: 20,
      },
    ],
  };

  const configgaugeChart = {
    type: "doughnut",
    data: datagaugeChart,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -90,
      circumference: 180,
      cutout: "85%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  new Chart(gaugeChart, configgaugeChart);
}

// =========================
// Chart PDDIKTI
// =========================
const pddiktiCanvas = document.getElementById("pddikti-chart");

if (pddiktiCanvas) {
  const pddikti = pddiktiCanvas.getContext("2d");

  const datapddikti = {
    labels: ["Selesai Laporan"],
    datasets: [
      {
        label: "Tidak ada data mahasiswa aktif pada periode 2025 Genap",
        data: [100],
        backgroundColor: ["rgba(35, 100, 240, 0.7)"],
        borderColor: ["rgba(35, 100, 240, 0.7)"],
        borderWidth: 2,
      },
    ],
  };

  const configpddikti = {
    type: "doughnut",
    data: datapddikti,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: 0 },
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: "#333",
            font: {
              size: 12,
              weight: "bold",
            },
          },
        },
        tooltip: {
          enabled: true,
          backgroundColor: "#333",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "#fff",
          borderWidth: 1,
          cornerRadius: 10,
        },
      },
    },
  };

  new Chart(pddikti, configpddikti);
}
