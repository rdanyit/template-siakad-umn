document.addEventListener("DOMContentLoaded", () => {
  const prodisearch = document.getElementById("prodisearch");
  const filterProdi = document.getElementById("filterProdi");
  const tabelProdi = document.getElementById("tabelProdi");

  function filterTable() {
    const keyword = (prodisearch?.value || "").toLowerCase().trim();
    const selectedProdi = (filterProdi?.value || "").toLowerCase().trim();

    const rows = tabelProdi.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();

      const rowProdi = row.children[0].innerText.toLowerCase().trim();

      const cocokKeyword = !keyword || rowText.includes(keyword);
      const cocokProdi = !selectedProdi || rowProdi === selectedProdi;

      row.style.display = cocokKeyword && cocokProdi ? "" : "none";
    });
  }

  prodisearch?.addEventListener("input", filterTable);
  filterProdi?.addEventListener("change", filterTable);
});
