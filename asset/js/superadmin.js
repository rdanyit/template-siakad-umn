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
  const value = Math.min(Math.max(targetValue, 0), 100); // ✅ clamp aman
  const gaugeCtx = gaugeCanvas.getContext("2d");

  new Chart(gaugeCtx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: [
            "rgba(35, 240, 45, 0.7)",
            "rgba(125, 255, 108, 0.72)", // ✅ FIXED
          ],
          borderWidth: 0,
          borderRadius: 20,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -90,
      circumference: 180,
      cutout: "85%",
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
  });
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

// =========================
// Chart Pendidikan Dosen
// =========================
const pddosenCanvas = document.getElementById("pddosen-chart");

if (pddosenCanvas) {
  const pddosen = pddosenCanvas.getContext("2d");

  // ✅ Ganti Utils.months() → labels manual
  const labelspddosen = ["S3", "S2", "S1", "D4", "D3", "D2", "D1"];

  const datapddosen = {
    labels: labelspddosen,
    datasets: [
      {
        label: "Jumlah Dosen",
        data: [12, 45, 30, 8, 4, 1, 0],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        borderRadius: 6, // ✅ lebih modern
      },
    ],
  };

  const configpddosen = {
    type: "bar",
    data: datapddosen,
    options: {
      responsive: true,
      maintainAspectRatio: false, // ✅ penting jika container fleksibel
      plugins: {
        legend: {
          display: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10,
          },
        },
      },
    },
  };

  new Chart(pddosen, configpddosen);
}

// =========================
// Rerata Mhs
// =========================
const rerataTarget = 80;
const rerataCanvas = document.getElementById("rerataChart");

if (rerataCanvas) {
  const value = Math.min(Math.max(rerataTarget, 0), 100);
  const rerataCtx = rerataCanvas.getContext("2d");

  new Chart(rerataCtx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: [
            "rgba(35, 240, 45, 0.7)",
            "rgba(125, 255, 108, 0.72)", // ✅ FIXED
          ],
          borderWidth: 0,
          borderRadius: 20,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -90,
      circumference: 180,
      cutout: "85%",
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
  });
}

// PT
const data = {
  unggul: 0,
  baikSekali: 5,
  baik: 2,
  kedaluwarsa: 5,
};

const total = data.unggul + data.baikSekali + data.baik + data.kedaluwarsa;

function setBar(selector, value) {
  const percent = total === 0 ? 0 : (value / total) * 100;
  document.querySelector(selector).style.width = percent + "%";
}

setBar(".unggul .fill", data.unggul);
setBar(".baik-sekali .fill", data.baikSekali);
setBar(".baik .fill", data.baik);
setBar(".kedaluwarsa .fill", data.kedaluwarsa);

// Keuangan
const keuangan = document.getElementById("keuangan-chart");

const chartkeuangan = new Chart(keuangan, {
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

// Dashboard UI
const dataui = [22, 20, 18, 15, 10, 10];

function buildPath(values) {
  const max = Math.max(...values);
  const min = Math.min(...values);

  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = 30 - ((v - min) / (max - min)) * 20;
    return `${x},${y}`;
  });

  return `M0,30 L${points.join(" L")} L100,30 Z`;
}

document.getElementById("chart-path").setAttribute("d", buildPath(dataui));

// item rerata
const waitCtx = document.getElementById("waitChart");
new Chart(waitCtx, {
  type: "bar",
  data: {
    labels: ["< 6 Bulan", "6–18 Bulan", "> 18 Bulan"],
    datasets: [
      {
        label: "Jumlah Lulusan",
        data: [0, 0, 0],
        backgroundColor: ["#6366f1", "#22c55e", "#f59e0b"],
        borderRadius: 8,
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
  },
});

const matchCtx = document.getElementById("matchChart");
new Chart(matchCtx, {
  type: "doughnut",
  data: {
    labels: ["Tinggi", "Sedang", "Rendah"],
    datasets: [
      {
        data: [10, 10, 10],
        backgroundColor: ["#3b82f6", "#f59e0b", "#10b981"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    cutout: "70%",
  },
});

// WYSIWYG
