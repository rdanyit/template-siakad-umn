const btnCek = document.querySelector(".btn-cek");
const input = document.getElementById("cari");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

// dummy data
const data = {
  2026001: {
    nama: "Andi Saputra",
    status: "Lulus Seleksi",
    type: "success",
  },
  2026002: {
    nama: "Budi Santoso",
    status: "Menunggu Verifikasi",
    type: "pending",
  },
};

btnCek.addEventListener("click", () => {
  const keyword = input.value.trim();

  if (!keyword) {
    alert("Silakan masukkan No. Pendaftaran atau NIM");
    return;
  }

  if (data[keyword]) {
    modalBody.innerHTML = `
          <p><b>Nama:</b> ${data[keyword].nama}</p>
          <p><b>No. Pendaftaran/NIM:</b> ${keyword}</p>
          <span class="status ${data[keyword].type}">
            ${data[keyword].status}
          </span>
        `;
  } else {
    modalBody.innerHTML = `
          <p>Data <b>${keyword}</b> tidak ditemukan.</p>
        `;
  }

  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
