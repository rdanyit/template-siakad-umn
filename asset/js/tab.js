const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const indicator = document.querySelector(".indicator");

function moveIndicator(tab) {
  indicator.style.width = `${tab.offsetWidth}px`;
  indicator.style.left = `${tab.offsetLeft}px`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add active
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");

    moveIndicator(tab);
  });
});

// Initialize indicator
window.addEventListener("load", () => {
  const activeTab = document.querySelector(".tab.active");
  moveIndicator(activeTab);
});

// Responsive recalculation
window.addEventListener("resize", () => {
  const activeTab = document.querySelector(".tab.active");
  moveIndicator(activeTab);
});
