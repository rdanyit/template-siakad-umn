document.addEventListener("DOMContentLoaded", () => {
  const mahasiswabarusearch = document.getElementById("mahasiswabarusearch");
  const tabelMahasiswa = document.getElementById("tabelMahasiswa");

  if (!mahasiswabarusearch || !tabelMahasiswa) return;

  const rows = tabelMahasiswa.querySelectorAll("tbody tr");

  function filterTable() {
    const keyword = mahasiswabarusearch.value.toLowerCase().trim();

    rows.forEach((row) => {
      const rowText = row.textContent.toLowerCase();
      row.style.display = rowText.includes(keyword) ? "" : "none";
    });
  }

  mahasiswabarusearch.addEventListener("input", filterTable);
});
