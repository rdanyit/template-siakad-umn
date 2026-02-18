document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file_ijazah");
  const previewContainer = document.getElementById("pdfPreviewContainer");
  const previewFrame = document.getElementById("pdfPreview");
  const removeBtn = document.getElementById("removePdf");

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (!file) return;

    /* Validasi tipe file */
    if (file.type !== "application/pdf") {
      alert("File harus berupa PDF");
      fileInput.value = "";
      return;
    }

    /* Validasi ukuran (1MB) */
    if (file.size > 1024 * 1024) {
      alert("Ukuran file melebihi 1MB");
      fileInput.value = "";
      return;
    }

    /* Tampilkan preview */
    const fileURL = URL.createObjectURL(file);
    previewFrame.src = fileURL;
    previewContainer.classList.remove("hidden");
  });

  /* Tombol hapus preview */
  removeBtn.addEventListener("click", () => {
    fileInput.value = "";
    previewFrame.src = "";
    previewContainer.classList.add("hidden");
  });
});
