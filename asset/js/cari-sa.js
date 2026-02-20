const searchInput = document.getElementById("search");
const table = document.getElementById("tabelData");
const tbody = table.querySelector("tbody");
const rows = tbody.querySelectorAll("tr");

searchInput.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();

  rows.forEach((row) => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(keyword) ? "" : "none";
  });
});
