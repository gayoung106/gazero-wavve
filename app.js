// app.js

// 슬라이더 요소들을 가져옵니다.
const swiperContainer = document.querySelector(".swiper-container");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const swiperSlides = document.querySelectorAll(".swiper-slide");
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

// 슬라이드 인덱스를 나타내는 변수를 초기화합니다.
let currentIndex = 0;

// 이전 버튼 클릭 시 슬라이드 이동 함수
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = swiperSlides.length - 1;
  }
  moveSlide();
}

// 다음 버튼 클릭 시 슬라이드 이동 함수
function nextSlide() {
  currentIndex++;
  if (currentIndex >= swiperSlides.length) {
    currentIndex = 0;
  }
  moveSlide();
}

// 슬라이드 이동 함수
function moveSlide() {
  const moveDistance = -currentIndex * 100; // 슬라이드 너비만큼 이동
  swiperWrapper.style.transform = `translateX(${moveDistance}%)`;
}

// 이전 버튼과 다음 버튼에 클릭 이벤트를 추가합니다.
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// 자동 슬라이드 기능을 추가합니다.
function autoSlide() {
  setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 이동
}

// 페이지 로드 시 자동 슬라이드 함수를 실행합니다.
autoSlide();
