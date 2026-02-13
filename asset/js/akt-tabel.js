const aktsearch = document.getElementById("aktsearch");
const filterAngkatan = document.getElementById("filterAngkatan");
const tabelAkt = document.getElementById("tabelAkt");

function filterTable() {
  const keyword = aktsearch.value.toLowerCase().trim();
  const angkatan = filterAngkatan.value;

  const rows = tabelAkt.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const rowText = row.innerText.toLowerCase();

    const rowAngkatan = row.children[0].innerText.trim();

    const cocokKeyword = rowText.includes(keyword);
    const cocokAngkatan = !angkatan || rowAngkatan === angkatan;

    row.style.display = cocokKeyword && cocokAngkatan ? "" : "none";
  });
}

aktsearch.addEventListener("input", filterTable);

filterAngkatan.addEventListener("change", filterTable);
