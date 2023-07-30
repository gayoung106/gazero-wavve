document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelectorAll(".swiper-container")[1];
  const swiperWrapper = swiperContainer.childNodes[1];
  const nextButton = document.querySelector(".second-button-prev");
  const prevButton = document.querySelector(".second-button-next");
  const recomaned = document.querySelector(".recommend_container");
  const contentSets = recomaned.children.length;

  const contentSetWidth = swiperWrapper.clientWidth; // 각 슬라이드의 너비

  let currentSet = 0;

  // 다음 슬라이드로 이동하는 함수
  function nextSet(e) {
    if (currentSet < contentSets - 1) {
      currentSet++;
      recomaned.style.transform = `translateX(-${
        contentSetWidth * currentSet
      }px)`;
    }
  }

  // 이전 슬라이드로 이동하는 함수
  function prevSet() {
    if (currentSet > 0) {
      currentSet--;
      recomaned.style.transform = `translateX(-${
        contentSetWidth * currentSet
      }px)`;
    }
  }

  // 네비게이션 버튼에 이벤트 리스너 추가
  prevButton.addEventListener("click", prevSet);
  nextButton.addEventListener("click", nextSet);
});
