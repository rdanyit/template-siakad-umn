document.addEventListener("DOMContentLoaded", function () {
  const btnInfo = document.querySelector(".btn-info");
  const blokPetunjuk = document.querySelector(".blok-petunjuk");

  btnInfo.addEventListener("click", function () {
    blokPetunjuk.classList.toggle("hidden");

    if (blokPetunjuk.classList.contains("hidden")) {
      btnInfo.innerHTML = `
          <i class="fa-solid fa-signs-post icon-btn"></i>
          Tampilkan Panduan
        `;
    } else {
      btnInfo.innerHTML = `
          <i class="fa-solid fa-signs-post icon-btn"></i>
          Sembunyikan Panduan
        `;
    }
  });
});
