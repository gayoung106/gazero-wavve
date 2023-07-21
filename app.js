// 슬라이드 요소
const swiperContainer = document.querySelector(".swiper-container");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const swiperSlides = document.querySelectorAll(".swiper-slide");
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

// 슬라이드 인덱스 번호 초기화
let currentIndex = 0;

// 이전버튼 슬라이드 이동 함수
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = swiperSlides.length - 1;
  }
  moveSlide();
}

// 다음 버튼 슬라이드 이동 함수
function nextSlide() {
  currentIndex++;
  if (currentIndex >= swiperSlides.length) {
    currentIndex = 0;
  }
  moveSlide();
}

// 슬라이드 이동 함수
function moveSlide() {
  const moveDistance = -currentIndex * 100; // 슬라이드 너비만큼 이동(규격)
  swiperWrapper.style.transform = `translateX(${moveDistance}%)`;
}

// 버튼에 클릭 이벤트를 추가
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// 자동 슬라이드
function autoSlide() {
  setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 이동
}

// 페이지 로드 시 자동 슬라이드 //
autoSlide();
