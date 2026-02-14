const inputCari = document.getElementById("carip");
const items = document.querySelectorAll(".item-pengumuman");

inputCari.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  items.forEach(function (item) {
    const judul = item.querySelector(".judul-info").textContent.toLowerCase();

    if (judul.includes(keyword)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});
