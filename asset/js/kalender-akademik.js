document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("kalenderGrid");
  const monthLabel = document.getElementById("monthLabel");
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  if (!grid || !monthLabel) return;

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  /* ===== DATA EVENT AKADEMIK ===== */
  const events = {
    "2026-02-10": { title: "Awal Perkuliahan", type: "akademik" },
    "2026-02-17": { title: "Batas Pengisian KRS", type: "akademik" },
    "2026-02-25": { title: "Ujian Tengah Semester", type: "uts" },
    "2026-02-27": { title: "Libur Nasional", type: "libur" },
  };

  function formatDate(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function renderCalendar(month, year) {
    grid.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDay = firstDay.getDay(); // 0 = Minggu
    const totalDays = lastDay.getDate();

    monthLabel.innerText = `${monthNames[month]} ${year}`;

    /* ===== CELL KOSONG AWAL ===== */
    for (let i = 0; i < startDay; i++) {
      const empty = document.createElement("div");
      empty.className = "kalender-day muted";
      grid.appendChild(empty);
    }

    /* ===== TANGGAL ===== */
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = formatDate(year, month, day);

      const div = document.createElement("div");
      div.className = "kalender-day";
      div.innerText = day;

      /* Highlight hari ini */
      if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        div.classList.add("today");
      }

      /* Event */
      if (events[dateStr]) {
        const eventData = events[dateStr];

        div.classList.add("event");
        div.title = eventData.title;

        if (eventData.type === "uts") div.classList.add("event-uts");
        if (eventData.type === "libur") div.classList.add("event-libur");
      }

      grid.appendChild(div);
    }
  }

  /* ===== NAVIGASI BULAN ===== */

  prevBtn?.addEventListener("click", () => {
    currentMonth--;

    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }

    renderCalendar(currentMonth, currentYear);
  });

  nextBtn?.addEventListener("click", () => {
    currentMonth++;

    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
  });

  /* Render awal */
  renderCalendar(currentMonth, currentYear);
});
