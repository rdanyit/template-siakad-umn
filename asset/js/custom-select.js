const customSelect = document.getElementById("customSelect");
const trigger = customSelect.querySelector(".select-trigger");
const options = customSelect.querySelectorAll(".select-option");
const selectedText = customSelect.querySelector(".selected-text");

// Toggle dropdown
trigger.addEventListener("click", () => {
  customSelect.classList.toggle("active");
});

// Select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    selectedText.textContent = option.textContent;
    customSelect.classList.remove("active");
  });
});

// Close when click outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    customSelect.classList.remove("active");
  }
});
