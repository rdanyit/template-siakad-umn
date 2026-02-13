document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("selectNilaiInput");
  const dropdown = document.getElementById("selectNilaiDropdown");
  const search = document.getElementById("selectNilaiSearch");
  const label = document.getElementById("selectNilaiLabel");

  const options = document.querySelectorAll(".option");
  const groups = document.querySelectorAll(".option-group");
  const groupLabels = document.querySelectorAll(".option-group-label");

  /* Toggle dropdown */
  input.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    input.classList.toggle("active");
    search.focus();
  });

  /* Expand / Collapse group */
  groupLabels.forEach((gl) => {
    gl.addEventListener("click", () => {
      const group = gl.parentElement;
      group.classList.toggle("collapsed");

      group.querySelectorAll(".option").forEach((opt) => {
        opt.style.display = group.classList.contains("collapsed") ? "none" : "";
      });
    });
  });

  /* Search filter */
  search.addEventListener("input", () => {
    const keyword = search.value.toLowerCase();

    options.forEach((opt) => {
      if (opt.classList.contains("option-group-label")) return;

      const cocok = opt.textContent.toLowerCase().includes(keyword);
      opt.style.display = cocok ? "" : "none";
    });

    groups.forEach((group) => {
      const visibleOptions = group.querySelectorAll(
        ".option:not([style*='none'])",
      );

      group.style.display = visibleOptions.length ? "" : "none";
    });
  });

  /* Select option */
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      if (opt.classList.contains("option-group-label")) return;

      options.forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");

      label.textContent = opt.textContent;

      dropdown.classList.remove("show");
      input.classList.remove("active");

      search.value = "";
      options.forEach((o) => (o.style.display = ""));
      groups.forEach((g) => (g.style.display = ""));
    });
  });

  /* Klik luar */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".selectNilai-wrapper")) {
      dropdown.classList.remove("show");
      input.classList.remove("active");
    }
  });
});
