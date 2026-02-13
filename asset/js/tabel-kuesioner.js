document.addEventListener("DOMContentLoaded", () => {
  const kuesionersearch = document.getElementById("kuesionersearch");
  const tabelKuesioner = document.getElementById("tabelKuesioner");

  if (!kuesionersearch || !tabelKuesioner) return;

  const rows = tabelKuesioner.querySelectorAll("tbody tr");

  function filterTable() {
    const keyword = kuesionersearch.value.toLowerCase().trim();

    rows.forEach((row) => {
      const rowText = row.textContent.toLowerCase();
      row.style.display = rowText.includes(keyword) ? "" : "none";
    });
  }

  kuesionersearch.addEventListener("input", filterTable);
});
