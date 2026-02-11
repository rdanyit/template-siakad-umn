const keywordInput = document.getElementById("keyword");
const agendaItems = document.querySelectorAll(".list-agenda .item-agenda");

keywordInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();

  agendaItems.forEach((item) => {
    const judul = item.querySelector(".judul-agenda").textContent.toLowerCase();

    if (judul.includes(keyword)) {
      item.style.display = "flex"; // tampil
    } else {
      item.style.display = "none"; // sembunyi
    }
  });
});
