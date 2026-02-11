const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    // reset active button
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // reset content
    tabContents.forEach((content) => {
      content.classList.remove("active");
      if (content.id === target) {
        content.classList.add("active");
      }
    });
  });
});
