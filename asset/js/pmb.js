// Select Periode
document.addEventListener("DOMContentLoaded", () => {
  const selectWrappers = document.querySelectorAll(".selectPeriode-wrapper");

  selectWrappers.forEach((wrapper) => {
    const input = wrapper.querySelector(".selectPeriode-input");
    const dropdown = wrapper.querySelector(".selectPeriode-dropdown");
    const search = wrapper.querySelector("input[type='text']");
    const label = wrapper.querySelector(
      ".selectPeriode-input span:first-child",
    );
    const options = wrapper.querySelectorAll(".option");
    const groups = wrapper.querySelectorAll(".option-group");
    const groupLabels = wrapper.querySelectorAll(".option-group-label");

    input.addEventListener("click", () => {
      dropdown.classList.toggle("show");
      input.classList.toggle("active");
      search.focus();
    });

    groupLabels.forEach((gl) => {
      gl.addEventListener("click", () => {
        const group = gl.parentElement;
        group.classList.toggle("collapsed");

        group.querySelectorAll(".option").forEach((opt) => {
          opt.style.display = group.classList.contains("collapsed")
            ? "none"
            : "";
        });
      });
    });

    search.addEventListener("input", () => {
      const keyword = search.value.toLowerCase();

      options.forEach((opt) => {
        if (opt.classList.contains("option-group-label")) return;
        const match = opt.textContent.toLowerCase().includes(keyword);
        opt.style.display = match ? "" : "none";
      });

      groups.forEach((group) => {
        const visibleOptions = group.querySelectorAll(
          ".option:not([style*='none'])",
        );
        group.style.display = visibleOptions.length ? "" : "none";
      });
    });

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        if (opt.classList.contains("option-group-label")) return;

        options.forEach((o) => o.classList.remove("selected"));
        opt.classList.add("selected");

        label.textContent = opt.textContent;

        dropdown.classList.remove("show");
        input.classList.remove("active");

        search.value = "";
        options.forEach((o) => (o.style.display = ""));
        groups.forEach((g) => (g.style.display = ""));
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".selectPeriode-wrapper")) {
        dropdown.classList.remove("show");
        input.classList.remove("active");
      }
    });
  });
});

// Chart Peminat
const peminat = document.getElementById("chart-peminat").getContext("2d");
const dataPeminat = {
  labels: ["Akun Aktif", "Belum Aktif"],
  datasets: [
    {
      label: "",
      data: [134, 0],
      backgroundColor: ["rgba(35, 100, 240, 0.7)", "rgb(255, 255, 255)"],
      borderColor: ["rgba(35, 100, 240, 0.7)", "rgba(255, 255, 255, 0.84)"],
      borderWidth: 2,
    },
  ],
};

const configpeminat = {
  type: "doughnut",
  data: dataPeminat,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white",
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
const chartPeminat = new Chart(peminat, configpeminat);

// Chart Pendaftar
const pendaftar = document.getElementById("chart-pendaftar").getContext("2d");
const datapendaftar = {
  labels: ["Finalisasi", "Belum Final"],
  datasets: [
    {
      label: "Jumlah Pendaftar",
      data: [72, 62],
      backgroundColor: ["rgba(42, 240, 35, 0.7)", "rgb(255, 255, 255)"],
      borderColor: ["rgba(42, 240, 35, 0.7)", "rgba(255, 255, 255, 0.84)"],
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
};
const configpendaftar = {
  type: "doughnut",
  data: datapendaftar,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white",
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
const chartpendaftar = new Chart(pendaftar, configpendaftar);

// Chart Diterima
const diterima = document.getElementById("chart-diterima").getContext("2d");
const dataditerima = {
  labels: ["Diterima", "Ditolak"],
  datasets: [
    {
      label: "Jumlah Diterima",
      data: [53, 0],
      backgroundColor: ["rgba(42, 240, 35, 0.7)", "rgba(209, 27, 27, 0.81)"],
      borderColor: ["rgba(42, 240, 35, 0.7)", "rgba(226, 18, 18, 0.84)"],
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
};
const configditerima = {
  type: "doughnut",
  data: dataditerima,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white",
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
const chartditerima = new Chart(diterima, configditerima);

// Chart Daftar Ulang
const du = document.getElementById("chart-du").getContext("2d");
const datadu = {
  labels: ["Sudah DU", "Belum DU"],
  datasets: [
    {
      label: "Jumlah Daftar Ulang",
      data: [0, 53],
      backgroundColor: ["rgba(255, 255, 255, 0.7)", "rgba(209, 27, 27, 0.81)"],
      borderColor: ["rgba(255, 255, 255, 0.7)", "rgba(226, 18, 18, 0.84)"],
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
};
const configdu = {
  type: "doughnut",
  data: datadu,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white",
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
const chartdu = new Chart(du, configdu);

// Statistik PMB
const statpmb = document.getElementById("statpmb-chart");

const chartstatpmb = new Chart(statpmb, {
  type: "line",
  data: {
    labels: ["Januari 2026", "Februari 2026"],
    datasets: [
      {
        label: "Daftar",
        data: [20, 80],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Aktif",
        data: [10, 5],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Finalisasi",
        data: [5, 2],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Lulus",
        data: [9, 7],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Daftar Ulang",
        data: [10, 12],
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
          text: "Jumlah Pendaftar",
        },
      },
      x: {
        title: {
          display: true,
          text: "Tanggal",
        },
      },
    },
  },
});

const togglestatpmb = document.getElementById("chartstatpmbToggle");
const dropdownstatpmb = document.getElementById("chartstatpmbDropdown");

togglestatpmb.addEventListener("click", () => {
  dropdownstatpmb.style.display =
    dropdownstatpmb.style.display === "block" ? "none" : "block";
});

document.getElementById("downloadstatpmbPNG").addEventListener("click", () => {
  const linkstatpmb = document.createElement("a");
  linkstatpmb.href = chartstatpmb.toBase64Image();
  linkstatpmb.download = "akm-chart.png";
  linkstatpmb.click();
});

document.getElementById("downloadstatpmbJPG").addEventListener("click", () => {
  const linkstatpmb = document.createElement("a");
  linkstatpmb.href = chartstatpmb.toBase64Image("image/jpeg", 1);
  linkstatpmb.download = "akm-chart.jpg";
  linkstatpmb.click();
});

const legendContainerstatpmb = document.getElementById("chartstatpmbLegend");

chartstatpmb.data.datasets.forEach((dataset, index) => {
  const pillstatpmb = document.createElement("div");
  pillstatpmb.className = "legend-pill";
  pillstatpmb.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pillstatpmb.onclick = () => {
    const meta = chartstatpmb.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null ? !chartstatpmb.data.datasets[index].hidden : null;

    pillstatpmb.classList.toggle("legend-inactive");

    chartstatpmb.update();
  };

  legendContainerstatpmb.appendChild(pillstatpmb);
});

// Tarffic Pendaftar
const trafik = document.getElementById("trafik-chart");
const charttrafik = new Chart(trafik, {
  type: "pie",
  data: {
    labels: ["Portal", "Didaftar Admin", "Import Excel", "Lainnya"],
    datasets: [
      {
        label: "",
        data: [134, 0, 0, 0],
        backgroundColor: [
          "rgba(61, 216, 30, 0.7)",
          "rgb(226, 206, 27)",
          "rgb(41, 117, 216)",
          "rgb(158, 39, 238)",
        ],
        borderColor: [
          "rgba(61, 216, 30, 0.7)",
          "rgb(226, 206, 27)",
          "rgb(41, 117, 216)",
          "rgb(158, 39, 238)",
        ],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "dark",
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
});
const toggletrafik = document.getElementById("charttrafikToggle");
const dropdowntrafik = document.getElementById("charttrafikDropdown");
toggletrafik.addEventListener("click", () => {
  dropdowntrafik.style.display =
    dropdowntrafik.style.display === "block" ? "none" : "block";
});
document.getElementById("downloadtrafikPNG").addEventListener("click", () => {
  const linktrafik = document.createElement("a");
  linktrafik.href = charttrafik.toBase64Image();
  linktrafik.download = "akm-chart.png";
  linktrafik.click();
});
document.getElementById("downloadtrafikJPG").addEventListener("click", () => {
  const linktrafik = document.createElement("a");
  linktrafik.href = charttrafik.toBase64Image("image/jpeg", 1);
  linktrafik.download = "akm-chart.jpg";
  linktrafik.click();
});
const legendContainertrafik = document.getElementById("charttrafikLegend");
charttrafik.data.datasets.forEach((dataset, index) => {
  const pilltrafik = document.createElement("div");
  pilltrafik.className = "legend-pill";
  pilltrafik.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pilltrafik.onclick = () => {
    const meta = charttrafik.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null ? !charttrafik.data.datasets[index].hidden : null;

    pilltrafik.classList.toggle("legend-inactive");

    charttrafik.update();
  };

  legendContainertrafik.appendChild(pilltrafik);
});

// Funnel PMB
const funnelpmb = document.getElementById("funnelpmb-chart");
const chartfunnelpmb = new Chart(funnelpmb, {
  type: "line",
  data: {
    labels: [
      "Peminat",
      "Pendaftar",
      "Mengisi Biodata",
      "Finalisasi Data",
      "Seleksi",
      "Lulus",
      "Daftar Ulang",
      "Generate NIM",
    ],
    datasets: [
      {
        label: "Periode 2026-1",
        data: [134, 134, 85, 72, 52, 53, 0, 0],
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Peride 2025-1",
        data: [1131, 1180, 1050, 1021, 454, 1004, 682, 681],
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          text: "Jumlah Pendaftar",
        },
      },
      x: {
        title: {
          display: true,
          text: "",
        },
      },
    },
  },
});
const togglefunnelpmb = document.getElementById("chartfunnelpmbToggle");
const dropdownfunnelpmb = document.getElementById("chartfunnelpmbDropdown");
togglefunnelpmb.addEventListener("click", () => {
  dropdownfunnelpmb.style.display =
    dropdownfunnelpmb.style.display === "block" ? "none" : "block";
});
document
  .getElementById("downloadfunnelpmbPNG")
  .addEventListener("click", () => {
    const linkfunnelpmb = document.createElement("a");
    linkfunnelpmb.href = chartfunnelpmb.toBase64Image();
    linkfunnelpmb.download = "akm-chart.png";
    linkfunnelpmb.click();
  });
document
  .getElementById("downloadfunnelpmbJPG")
  .addEventListener("click", () => {
    const linkfunnelpmb = document.createElement("a");
    linkfunnelpmb.href = chartfunnelpmb.toBase64Image("image/jpeg", 1);
    linkfunnelpmb.download = "akm-chart.jpg";
    linkfunnelpmb.click();
  });
const legendContainerfunnelpmb = document.getElementById(
  "chartfunnelpmbLegend",
);
chartfunnelpmb.data.datasets.forEach((dataset, index) => {
  const pillfunnelpmb = document.createElement("div");
  pillfunnelpmb.className = "legend-pill";
  pillfunnelpmb.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pillfunnelpmb.onclick = () => {
    const meta = chartfunnelpmb.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null ? !chartfunnelpmb.data.datasets[index].hidden : null;

    pillfunnelpmb.classList.toggle("legend-inactive");

    chartfunnelpmb.update();
  };

  legendContainerfunnelpmb.appendChild(pillfunnelpmb);
});

// Jenis Kemain
const gender = document.getElementById("gender-chart");
const chartgender = new Chart(gender, {
  type: "pie",
  data: {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        label: "",
        data: [50, 604],
        backgroundColor: ["rgba(30, 148, 216, 0.7)", "rgb(27, 26, 16)"],
        borderColor: ["rgba(30, 148, 216, 0.7)", "rgb(27, 26, 16)"],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "dark",
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
});
const togglegender = document.getElementById("chartgenderToggle");
const dropdowngender = document.getElementById("chartgenderDropdown");
togglegender.addEventListener("click", () => {
  dropdowngender.style.display =
    dropdowngender.style.display === "block" ? "none" : "block";
});
document.getElementById("downloadgenderPNG").addEventListener("click", () => {
  const linkgender = document.createElement("a");
  linkgender.href = chartgender.toBase64Image();
  linkgender.download = "akm-chart.png";
  linkgender.click();
});
document.getElementById("downloadgenderJPG").addEventListener("click", () => {
  const linkgender = document.createElement("a");
  linkgender.href = chartgender.toBase64Image("image/jpeg", 1);
  linkgender.download = "akm-chart.jpg";
  linkgender.click();
});
const legendContainergender = document.getElementById("chartgenderLegend");
chartgender.data.datasets.forEach((dataset, index) => {
  const pillgender = document.createElement("div");
  pillgender.className = "legend-pill";
  pillgender.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pillgender.onclick = () => {
    const meta = chartgender.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null ? !chartgender.data.datasets[index].hidden : null;

    pillgender.classList.toggle("legend-inactive");

    chartgender.update();
  };

  legendContainergender.appendChild(pillgender);
});

// Tahun Lulus
const tahunlulus = document.getElementById("tahunlulus-chart");
const charttahunlulus = new Chart(tahunlulus, {
  type: "pie",
  data: {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
    ],
    datasets: [
      {
        label: "",
        data: [50, 10, 30, 20, 50, 40, 60, 70, 90, 80, 100, 30],
        backgroundColor: [
          "rgba(216, 30, 70, 0.7)",
          "rgba(216, 30, 169, 0.7)",
          "rgba(173, 30, 216, 0.7)",
          "rgba(132, 30, 216, 0.7)",
          "rgba(80, 30, 216, 0.7)",
          "rgba(42, 30, 216, 0.7)",
          "rgba(30, 80, 216, 0.7)",
          "rgba(30, 111, 216, 0.7)",
          "rgba(30, 157, 216, 0.7)",
          "rgba(30, 216, 207, 0.7)",
          "rgba(30, 216, 108, 0.7)",
          "rgba(30, 216, 61, 0.7)",
        ],
        borderColor: [
          "rgba(216, 30, 70, 0.7)",
          "rgba(216, 30, 169, 0.7)",
          "rgba(173, 30, 216, 0.7)",
          "rgba(132, 30, 216, 0.7)",
          "rgba(80, 30, 216, 0.7)",
          "rgba(42, 30, 216, 0.7)",
          "rgba(30, 80, 216, 0.7)",
          "rgba(30, 111, 216, 0.7)",
          "rgba(30, 157, 216, 0.7)",
          "rgba(30, 216, 207, 0.7)",
          "rgba(30, 216, 108, 0.7)",
          "rgba(30, 216, 61, 0.7)",
        ],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "dark",
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
});
const toggletahunlulus = document.getElementById("charttahunlulusToggle");
const dropdowntahunlulus = document.getElementById("charttahunlulusDropdown");
toggletahunlulus.addEventListener("click", () => {
  dropdowntahunlulus.style.display =
    dropdowntahunlulus.style.display === "block" ? "none" : "block";
});
document
  .getElementById("downloadtahunlulusPNG")
  .addEventListener("click", () => {
    const linktahunlulus = document.createElement("a");
    linktahunlulus.href = charttahunlulus.toBase64Image();
    linktahunlulus.download = "akm-chart.png";
    linktahunlulus.click();
  });
document
  .getElementById("downloadtahunlulusJPG")
  .addEventListener("click", () => {
    const linktahunlulus = document.createElement("a");
    linktahunlulus.href = charttahunlulus.toBase64Image("image/jpeg", 1);
    linktahunlulus.download = "akm-chart.jpg";
    linktahunlulus.click();
  });
const legendContainertahunlulus = document.getElementById(
  "charttahunlulusLegend",
);
charttahunlulus.data.datasets.forEach((dataset, index) => {
  const pilltahunlulus = document.createElement("div");
  pilltahunlulus.className = "legend-pill";
  pilltahunlulus.innerHTML = `
    <span class="legend-color" style="background:${dataset.borderColor || "#4e73df"}"></span>
    ${dataset.label}
  `;

  pilltahunlulus.onclick = () => {
    const meta = charttahunlulus.getDatasetMeta(index);

    meta.hidden =
      meta.hidden === null
        ? !charttahunlulus.data.datasets[index].hidden
        : null;

    pilltahunlulus.classList.toggle("legend-inactive");

    charttahunlulus.update();
  };

  legendContainertahunlulus.appendChild(pilltahunlulus);
});
