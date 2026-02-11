const slider = document.querySelector(".testimoni");
const items = document.querySelectorAll(".detail-testimoni");
const wrapper = document.querySelector(".testimoni-wrapper");

let itemsPerSlide = 2;
let currentSlide = 0;
const intervalTime = 3000;

function getItemsPerSlide() {
  return window.innerWidth <= 576 ? 1 : 2;
}

function updateSlider() {
  itemsPerSlide = getItemsPerSlide();
  const slideWidth = wrapper.clientWidth;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function autoSlide() {
  const totalSlides = Math.ceil(items.length / itemsPerSlide);
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// init
updateSlider();
setInterval(autoSlide, intervalTime);

// responsive
window.addEventListener("resize", updateSlider);
