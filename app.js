document.addEventListener("DOMContentLoaded", function () {
  // Custom Slider Functionality
  function initSlider() {
    const sliderContainer = document.querySelector(".swiper-container");
    const sliderWrapper = sliderContainer.querySelector(
      ".swiper-wrapper-banner"
    );
    const slides = sliderWrapper.querySelectorAll(".swiper-slide");
    const prevBtn = sliderContainer.querySelector(".swiper-button-prev");
    const nextBtn = sliderContainer.querySelector(".swiper-button-next");
    const pagination = sliderContainer.querySelector(".swiper-pagination");

    const slideCount = slides.length;
    // let slideWidth = slides[0].offsetWidth;
    // const slideMargin = 10; // Adjust as needed
    const size = slides[0].clientWidth;

    let currentIndex = 1;
    // let offset = 0;
    function updateSliderPosition() {
      // const totalSlideWidth = slideWidth + slideMargin;
      // offset = -currentIndex * slideWidth;
      // console.log("size: ", -size * currentIndex);
      sliderWrapper.style.transform = `translateX(${
        -size * currentIndex + 190
      }px)`;
    }

    function updatePagination() {
      pagination
        .querySelectorAll(".swiper-pagination-bullet")
        .forEach((bullet, index) => {
          bullet.classList.toggle("active", index === currentIndex);
        });
    }

    function goToSlide(index) {
      sliderWrapper.style.transition = "0.3s ease-in-out";
      if (index < 0) {
        currentIndex = slideCount - 1;
      } else if (index >= slideCount) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateSliderPosition();
      updatePagination();
    }

    // Recalculate slideWidth on window resize
    window.addEventListener("resize", function () {
      slideWidth = slides[0].offsetWidth;
      updateSliderPosition();
    });

    sliderWrapper.addEventListener("transitionend", () => {
      if (currentIndex === slides.length - 1) {
        currentIndex = slides.length - (slides.length - 1);
        sliderWrapper.style.transition = "0s";
        sliderWrapper.style.transform = `translateX(${
          -size * currentIndex + 190
        }px)`;
      }
      if (currentIndex === 0) {
        // if (slides[currentIndex].id === "firstIndex") {
        currentIndex = slides.length - 2;
        sliderWrapper.style.transition = "0s";
        sliderWrapper.style.transform = `translateX(${
          -size * currentIndex + 190
        }px)`;
      }
    });

    // Initialize slider position
    updateSliderPosition();
    updatePagination();

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
    nextBtn.addEventListener("click", () => goToSlide(currentIndex - 1));

    // Event listeners for pagination bullets
    pagination
      .querySelectorAll(".swiper-pagination-bullet")
      .forEach((bullet, index) => {
        bullet.addEventListener("click", () => goToSlide(index));
      });
  }

  // Initialize the custom slider
  initSlider();
});
