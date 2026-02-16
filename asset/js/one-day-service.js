document.addEventListener("DOMContentLoaded", () => {
  function initTableFilter(config) {
    const filterSelect = document.getElementById(config.filterId);
    const searchInput = document.getElementById(config.searchId);
    const rows = document.querySelectorAll(`${config.tableSelector} tbody tr`);

    /* Jika elemen tidak ada → skip (anti error multi tab) */
    if (!filterSelect || !searchInput || rows.length === 0) return;

    function applyFilter() {
      const filterValue = filterSelect.value;
      const keyword = searchInput.value.toLowerCase();
      let nomor = 1;

      rows.forEach((row) => {
        const status = row.dataset.status;
        const nama = (row.dataset.nama || "").toLowerCase();
        const kode = (row.dataset.kode || "").toLowerCase();

        const cocokStatus = status === filterValue;
        const cocokSearch = nama.includes(keyword) || kode.includes(keyword);

        if (cocokStatus && cocokSearch) {
          row.style.display = "";
          const nomorCell = row.querySelector(".row-number");
          if (nomorCell) nomorCell.textContent = nomor++;
        } else {
          row.style.display = "none";
        }
      });
    }

    filterSelect.addEventListener("change", applyFilter);
    searchInput.addEventListener("input", applyFilter);

    /* Default load */
    if (!filterSelect.value) {
      filterSelect.value = "belum-verifikasi";
    }

    applyFilter();
  }

  /* ================= INIT PER TAB ================= */

  initTableFilter({
    filterId: "filterstatuspeminat",
    searchId: "statuspeminatsearch",
    tableSelector: "#tabelPeminat",
  });

  initTableFilter({
    filterId: "filterstatuspendaftar",
    searchId: "statuspendaftarsearch",
    tableSelector: "#tabelPendaftar",
  });

  initTableFilter({
    filterId: "filterstatusdaftarulang",
    searchId: "statusdaftarulangsearch",
    tableSelector: "#tabelDaftarUlang",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const seleksiSearchInput = document.getElementById(
    "statuspesertaseleksisearch",
  );
  const seleksiRows = document.querySelectorAll("#tabelSeleksi tbody tr");

  if (!seleksiSearchInput || seleksiRows.length === 0) return;

  function applySeleksiSearch() {
    const seleksiKeyword = seleksiSearchInput.value.toLowerCase();
    let seleksiNomor = 1;

    seleksiRows.forEach((seleksiRow) => {
      const seleksiNama = (seleksiRow.dataset.nama || "").toLowerCase();
      const seleksiKode = (seleksiRow.dataset.kode || "").toLowerCase();

      const seleksiMatch =
        seleksiNama.includes(seleksiKeyword) ||
        seleksiKode.includes(seleksiKeyword);

      if (seleksiMatch) {
        seleksiRow.style.display = "";
        const nomorCell = seleksiRow.querySelector(".row-number-seleksi");
        if (nomorCell) nomorCell.textContent = seleksiNomor++;
      } else {
        seleksiRow.style.display = "none";
      }
    });
  }

  seleksiSearchInput.addEventListener("input", applySeleksiSearch);

  /* Default load */
  applySeleksiSearch();
});
