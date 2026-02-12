const allMenus = document.querySelectorAll(".has-submenu");

allMenus.forEach((menu) => {
  const trigger = menu.querySelector(".link-menu");

  trigger.addEventListener("click", function (e) {
    e.preventDefault();

    allMenus.forEach((other) => {
      if (other !== menu) {
        other.classList.remove("open");
        other.querySelector(".link-menu").classList.remove("active");
      }
    });

    menu.classList.toggle("open");

    document
      .querySelectorAll(".link-menu")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll(".link-submenu").forEach((sub) => {
  sub.addEventListener("click", function () {
    document
      .querySelectorAll(".link-submenu")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
