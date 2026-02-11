const sticky = document.querySelector(".sticky-phone");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 200) {
    // scroll ke bawah → sembunyi
    sticky.classList.add("hide");
  } else {
    // scroll ke atas → muncul
    sticky.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
