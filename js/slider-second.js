document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.getElementById("app");
  const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");
  const prevButton = swiperContainer.querySelector(".second-button-prev");
  const nextButton = swiperContainer.querySelector(".second-button-next");

  const contentSets = swiperWrapper.querySelectorAll(".swiper-slide");
  const contentSetWidth = contentSets[0].clientWidth; // 각 슬라이드의 너비

  let currentSet = 0;

  // 다음 슬라이드로 이동하는 함수
  function nextSet() {
    if (currentSet < currentSet.length - 1) {
      currentSet++;
      swiperWrapper.style.transform = `translateX(-${
        contentSetWidth * currentSet + 500
      }px)`;
    }
  }

  // 이전 슬라이드로 이동하는 함수
  function prevSet() {
    if (currentSet > 0) {
      currentSet--;
      swiperWrapper.style.transform = `translateX(-${
        contentSetWidth * currentSet + 500
      }px)`;
    }
  }

  // 네비게이션 버튼에 이벤트 리스너 추가
  prevButton.addEventListener("click", prevSet);
  nextButton.addEventListener("click", nextSet);
});
