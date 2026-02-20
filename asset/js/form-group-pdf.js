document.getElementById("file_sertif").addEventListener("change", function () {
  const file = this.files[0];
  const previewContainer = this.closest(".form-group").nextElementSibling;

  // Reset preview
  previewContainer.innerHTML = "";

  if (!file) return;

  // Validasi PDF
  if (file.type !== "application/pdf") {
    previewContainer.innerHTML = "<p style='color:red'>File harus PDF</p>";
    return;
  }

  const fileURL = URL.createObjectURL(file);

  const iframe = document.createElement("iframe");
  iframe.src = fileURL;
  iframe.height = "400px";
  iframe.style.border = "1px solid var(--border-default)";
  iframe.style.borderRadius = "5px";

  previewContainer.appendChild(iframe);
});
