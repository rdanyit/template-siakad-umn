document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest("[data-oc-toggle]");
  const closeBtn = e.target.closest("[data-oc-close]");

  if (toggleBtn) {
    const wrapper = toggleBtn.closest(".oc-wrapper");
    const offcanvas = wrapper.querySelector(".offcanvas");

    offcanvas.classList.add("active");
  }

  if (closeBtn) {
    const wrapper = closeBtn.closest(".oc-wrapper");
    const offcanvas = wrapper.querySelector(".offcanvas");

    offcanvas.classList.remove("active");
  }
});
