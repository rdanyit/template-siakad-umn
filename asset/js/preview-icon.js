document.getElementById("icon").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    document.querySelector(".iconimg").src = e.target.result;
  };

  reader.readAsDataURL(file);
});
