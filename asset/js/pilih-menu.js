const aplikasiSelect = document.getElementById("aplikasi");
const menuSelect = document.getElementById("menu");

// Ambil pembungkus Menu (form-group)
const menuGroup = menuSelect.closest(".form-group");

const menuData = {
  akademik: ["Dashboard", "KRS", "KHS", "Jadwal Kuliah"],
  pmb: ["Dashboard PMB", "Pendaftaran", "Verifikasi", "Pengumuman"],
  elearning: ["Beranda", "Materi", "Tugas", "Forum"],
  cbt: ["Dashboard CBT", "Ujian", "Hasil Ujian"],
  pddikti: ["Sinkronisasi", "Laporan", "Referensi"],
  admin: ["Manajemen User", "Pengaturan", "Log Aktivitas"],
};

function resetMenu() {
  menuSelect.innerHTML = '<option value="">Pilih Menu</option>';
  menuGroup.style.display = "none"; // sembunyikan label + select
}

// awalnya sembunyikan
resetMenu();

aplikasiSelect.addEventListener("change", function () {
  const selectedApp = this.value;

  resetMenu();

  if (menuData[selectedApp]) {
    menuData[selectedApp].forEach((menu) => {
      const option = document.createElement("option");
      option.value = menu.toLowerCase().replace(/\s+/g, "_");
      option.textContent = menu;
      menuSelect.appendChild(option);
    });

    menuGroup.style.display = "block"; // tampilkan label + select
  }
});
