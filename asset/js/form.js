const form = document.getElementById("modernForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const nama = document.getElementById("nama");
  const kategori = document.getElementById("kategori");
  const tanggal = document.getElementById("tanggal");

  function showError(input, condition) {
    const error = input.nextElementSibling;
    if (condition) {
      error.style.display = "block";
      valid = false;
    } else {
      error.style.display = "none";
    }
  }

  showError(nama, nama.value.trim() === "");
  showError(kategori, kategori.value === "");
  showError(tanggal, tanggal.value === "");

  if (valid) {
    alert("Form berhasil disimpan!");
    form.reset();
  }
});
