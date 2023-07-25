document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.getElementById("main-banner");
  const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper-banner");
  const prevButton = swiperContainer.querySelector(".swiper-button-prev");
  const nextButton = swiperContainer.querySelector(".swiper-button-next");

  const contentSets = swiperWrapper.querySelectorAll(".swiper-slide");
  const contentSetWidth = contentSets[0].clientWidth; // 각 슬라이드의 너비

  let currentSet = 0;

  // 다음 슬라이드로 이동하는 함수
  function nextSet() {
    if (currentSet < contentSets.length - 1) {
      currentSet++;
      swiperWrapper.style.transform = `translateX(-${
        contentSetWidth * currentSet
      }px)`;
    }
  }

  // 이전 슬라이드로 이동하는 함수
  function prevSet() {
    if (currentSet > 0) {
      currentSet--;
      swiperWrapper.style.transform = `translateX(-${
        contentSetWidth * currentSet
      }px)`;
    }
  }

  // 네비게이션 버튼에 이벤트 리스너 추가
  prevButton.addEventListener("click", prevSet);
  nextButton.addEventListener("click", nextSet);
});
