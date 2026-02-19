(() => {
  const portal_searchBtn = document.getElementById("searchBtn");
  const portal_searchInput = document.getElementById("searchInput");

  portal_searchBtn.onclick = () => {
    const portal_keyword = portal_searchInput.value.trim();

    if (!portal_keyword) {
      alert("Masukkan kata kunci pencarian");
      return;
    }

    alert(`Mencari data untuk: ${portal_keyword}`);
  };
})();
