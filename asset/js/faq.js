const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // tutup item lain
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // toggle item ini
    item.classList.toggle("active");
  });
});
