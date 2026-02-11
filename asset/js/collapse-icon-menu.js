const collapseLinks = document.querySelectorAll(
  ".dropdown-menu-mobile .has-collapse > a",
);

collapseLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const parentLi = link.parentElement;
    const targetId = link.dataset.target;

    /* Close others */
    document.querySelectorAll(".has-collapse").forEach((li) => {
      if (li !== parentLi) li.classList.remove("active");
    });

    /* Toggle current */
    parentLi.classList.toggle("active");
  });
});
