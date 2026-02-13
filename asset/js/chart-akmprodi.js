function splitByDashProdi(label, maxLineLength = 16) {
  if (!label.includes("-")) return label;

  const parts = label.split("-");
  const firstLine = parts[0].trim();
  const secondRaw = parts.slice(1).join("-").trim();

  const words = secondRaw.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? currentLine + " " + word : word;

    if (testLine.length > maxLineLength) {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  if (currentLine) lines.push(currentLine);

  return [firstLine, ...lines];
}

const rawLabelsProdi = [
  "D3-Kebidanan",
  "D3-Keperawatan",
  "Prof-Profesi Ners",
  "S1-Administrasi Publik",
  "S1-Administrasi Rumah Sakit",
  "S1-Akuntansi",
  "S1-Farmasi",
  "S1-Gizi",
  "S1-Hukum",
  "S1-Ilmu Keperawatan",
  "S1-Kebidanan",
];

const formattedLabelsProdi = rawLabelsProdi.map(splitByDashProdi);

const akmprodi = document.getElementById("akmprodi-chart");

if (akmprodi) {
  akmprodi.style.maxHeight = "400px";
  akmprodi.style.height = "400px";

  const commonDatasetStyle = {
    borderWidth: 2,
    tension: 0.3,
    pointRadius: 2,
    pointHoverRadius: 4,
    fill: false,
  };

  const chartprodi = new Chart(akmprodi, {
    type: "line",
    data: {
      labels: formattedLabelsProdi,
      datasets: [
        {
          label: "Aktif",
          data: [0, 80, 400, 520, 600, 700, 800, 850, 875, 900, 920],
        },
        {
          label: "Cuti",
          data: [0, 5, 10, 8, 7, 6, 4, 9, 0, 1, 3],
        },
        {
          label: "Sedang Double Degree",
          data: [0, 2, 4, 3, 2, 2, 0, 9, 6, 8, 4],
        },
        {
          label: "Kampus Merdeka",
          data: [0, 0, 6, 9, 7, 5, 7, 8, 5, 9, 6],
        },
        {
          label: "Non Aktif",
          data: [0, 10, 12, 15, 14, 11, 2, 8, 5, 4, 8],
        },
        {
          label: "Menunggu Ukom",
          data: [0, 0, 3, 4, 5, 3, 4, 1, 0, 2],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      layout: {
        padding: { top: 10, bottom: 10 },
      },
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 },
          title: {
            display: true,
            text: "Jumlah Mahasiswa",
          },
        },
        x: {
          offset: true,
          grid: { display: false },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: false,
            padding: 6,
            font: {
              size: 10,
              lineHeight: 1,
            },
          },
          title: {
            display: true,
            text: "Program Studi",
          },
        },
      },
    },
  });

  /* ================= DOWNLOAD ================= */

  document.getElementById("downloadProdiPNG")?.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = chartprodi.toBase64Image();
    link.download = "akm-chart.png";
    link.click();
  });

  document.getElementById("downloadProdiJPG")?.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = chartprodi.toBase64Image("image/jpeg", 1);
    link.download = "akm-chart.jpg";
    link.click();
  });

  /* ================= DROPDOWN ================= */

  const toggleProdi = document.getElementById("chartProdiToggle");
  const dropdownProdi = document.getElementById("chartProdiDropdown");

  toggleProdi?.addEventListener("click", () => {
    dropdownProdi.style.display =
      dropdownProdi.style.display === "block" ? "none" : "block";
  });

  /* ================= CUSTOM LEGEND ================= */

  const legendContainerProdi = document.getElementById("chartProdiLegend");

  chartprodi.data.datasets.forEach((dataset, index) => {
    const pill = document.createElement("div");
    pill.className = "legend-pill";

    const color = dataset.borderColor || "#4e73df";

    pill.innerHTML = `
      <span class="legend-color" style="background:${color}"></span>
      ${dataset.label}
    `;

    pill.addEventListener("click", () => {
      const meta = chartprodi.getDatasetMeta(index);
      meta.hidden = meta.hidden === null ? true : null;

      pill.classList.toggle("legend-inactive");
      chartprodi.update();
    });

    legendContainerProdi?.appendChild(pill);
  });
}
