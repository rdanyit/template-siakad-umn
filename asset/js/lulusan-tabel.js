document.addEventListener("DOMContentLoaded", () => {
  const lulussearch = document.getElementById("lulussearch");
  const filterLulusan = document.getElementById("filterLulusan");
  const tabelLulusan = document.getElementById("tabelLulusan");

  function filterTable() {
    const keyword = (lulussearch?.value || "").toLowerCase().trim();
    const selectedProdi = (filterLulusan?.value || "").toLowerCase().trim();

    const rows = tabelLulusan.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();

      const rowProdi = row.children[0].innerText.toLowerCase().trim();

      const cocokKeyword = !keyword || rowText.includes(keyword);
      const cocokProdi = !selectedProdi || rowProdi === selectedProdi;

      row.style.display = cocokKeyword && cocokProdi ? "" : "none";
    });
  }

  lulussearch?.addEventListener("input", filterTable);
  filterLulusan?.addEventListener("change", filterTable);
});
