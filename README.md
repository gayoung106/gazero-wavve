# 📌 Wavve

#### demo url

https://gazero-wavve.vercel.app/

🕐 23.07.19: Wavve(https://www.wavve.com/index.html) 를 참고해서 메인 페이지 아웃라인 잡기(html + css)
🕐 23.07.20: main 이미지 작업 및 css 작업 추가

## ⭐ Color Reference

| Color                 | Hex                                                                |
| --------------------- | ------------------------------------------------------------------ |
| Body background Color | ![#1b1b1b](https://via.placeholder.com/10/1b1b1b?text=+) #1b1b1b   |
| Fonts Color           | ![#a5a5a5;](https://via.placeholder.com/10/a5a5a5?text=+) #a5a5a5; |
| Border Color          | ![#2f2f2f](https://via.placeholder.com/10/2f2f2f?text=+) #2f2f2f   |
| Title Color           | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff            |

## 🔆 Reference OutLine(wavve main)

### 🩷 header + main banner

![](https://velog.velcdn.com/images/gazero_/post/67b9a530-c6c4-4b26-8270-f38b85b50f53/image.png)
![](https://velog.velcdn.com/images/gazero_/post/30e84df5-36bb-4475-bc89-f82f44fe6bb3/image.png)

### 🩷 main contents section

![](https://velog.velcdn.com/images/gazero_/post/4b706181-38e2-45ac-b1f4-a28d4a498c4d/image.png)
![](https://velog.velcdn.com/images/gazero_/post/bdaef47e-1f7d-43a2-ab9a-0cc690423b23/image.png)

### 🩷 footer

![](https://velog.velcdn.com/images/gazero_/post/7ab620a9-03de-4b05-b683-78d37fcf950c/image.png)
![](https://velog.velcdn.com/images/gazero_/post/1f0656a7-8ce4-4217-ad15-546f24952086/image.png)

## 🖥 Working

### 0719 : main page outLine

![](https://velog.velcdn.com/images/gazero_/post/e91d8fc3-bcc4-47b6-9f2f-39cc8e2b6051/image.jpeg)
![iShot_2023-07-20_11 02 48](https://github.com/gayoung106/gazero-wavve/assets/98731537/72ea7e70-0f0e-4945-85df-7fc4fdf0a1d9)

### 0720: main page swiper outline / contents image

- main contents section은 해당 컴포넌트 단위가 아래에 계속 반복됨
- swiper에 이미지 규격 넣음 나머지는 js 작업이 필요

### 0721: main contents section mouse hover effect

- 메인 컨텐츠 섹션의 썸네일 마우스 호버효과 : 확대(transform: scale(1.05))
- 다른 부분 디테일한 부분 수정

  > #### 현재까지 진행상황 !

  1. header + main swiper
     ![](https://velog.velcdn.com/images/gazero_/post/decc633f-1252-404b-8e41-b8f02bf7bd67/image.png)

  2. main contents section
     ![](https://velog.velcdn.com/images/gazero_/post/34e780f4-e6dd-4888-b926-b55d7ff1bf04/image.png)

  ![iShot_2023-07-22_09 34 27](https://github.com/gayoung106/gazero-wavve/assets/98731537/cde37d6b-0138-41f9-8a21-8aae99dbfa49) 3. footer
  ![](https://velog.velcdn.com/images/gazero_/post/dcb054c0-ffb6-4b44-beba-8b93c4cd9284/image.png)

### 0724: 순수자바스트립트로 메인 배너 스와이퍼 만들기

#### 스와이퍼의 구조 및 특징

<img width="1713" alt="iShot_2023-07-24_11 18 07" src="https://github.com/gayoung106/gazero-wavve/assets/98731537/4d2ec1dc-23fe-4c23-8e95-3d4ae0c950ac">

1. 초기 화면에 총 3개의 컨텐츠가 노출(이전 컨텐츠, 메인컨텐츠, 다음 컨텐츠)
2. 무한 루프의 형태
3. 이전/다음 버튼을 누르면 컨텐츠가 이전컨텐츠/다음컨텐츠로 이동함

#### 필요한 html요소 가져오기

![이름 없는 노트북 (1)-9](https://github.com/gayoung106/gazero-wavve/assets/98731537/60346782-747d-4908-9a43-3602cfa862bf)

1. swiper-container
2. swiper-wrapper-banner
3. swiper-slide
4. swiper-button-prev / swiper-button-next
5. swiper-pagination

#### 필요한 요소 변수로 저장

1. slideCount: swiper-slide는 배열의 형태로 가져옴(querySelectorAll)
2. size: 실제로 차지하는 공간을 확인하기 위함
3. currentIndex: 현재(메인컨텐츠) 보여질 인덱스, 초깃값 1

#### 필요한 함수

1. updateSliderPosition(): 슬라이드 배치되는 위치를 조정하는 함수
2. updatePagination(): bullet에 따라 인덱스를 조정하는 함수
3. goToSlide(): 제공된 인덱스를 기준으로 슬라이드 이동시키는 함수

#### 필요한 이벤트 리스너

1. resize: 슬라이더의 위치가 다시 계산되고 새창 크기에 맞게 업데이트 되도록 하기 위한 기능
2. transitioned: 슬라이드 무한 루프를 위해 - 마지막 슬라이드에 도달했을 때, 인덱스가 조정
3. click: 이전/다음 버튼을 통한 컨텐츠 이동 & bullet을 이용한 컨텐츠 이동

### 완성된 swiper

![iShot_2023-07-24_11 46 24](https://github.com/gayoung106/gazero-wavve/assets/98731537/e75b694e-cda3-45aa-8bb5-1bbe6aed82cb)

## 0727: 여러개 묶여있는 데이터 꾸러미 스와이퍼

> 글로 설명하는 것이 어렵기 때문에, 진짜 예시화면을 보자면 아래와 같음

![](https://velog.velcdn.com/images/gazero_/post/dd3b2b5b-0fd4-4c88-8d8a-6053808da387/image.gif)

#### 그니까 최종목표🙏: 뭐, 5개의 데이터가 1세트로 돌아가는 스와이퍼를 만들고 싶다 ! (아자, 아자 화이팅 🔆)

출처: 웨이브 웹페이지

#### 여러 데이터로 묶여있는 클래스를 스와이퍼로 만들기

![이름 없는 노트북 (1)-10](https://github.com/gayoung106/gazero-wavve-webpage/assets/98731537/a2aa3598-ed10-4aea-9d50-78dd7dc875d4)

#### 해당 화면 구성은

```basic
.swiper-container가 .swiper-wrapper를 둘러 싸고 있고,
그 안에
데이터 하나 하나는
.swiper-slide - .thumb - a태그 - .thumb-image... 이렇게 세부 내용이 들어가 있음
```

#### 🤔 계획 / 시행착오

> swiper-container와 wrapper가 스와이퍼 1화면의 구성이어야 할 것 같음

- 지금까지 swiper-container / swiper-wrapper 안에서 돌리면 된다고 착각함
- 심경의 변화: 화면에 변화가 없음😯 -> 이상함을 눈치챔😨 -> 콘솔을 확인함😣 : 404오류를 만남..😱
  ![iShot_2023-07-29_08 53 23](https://github.com/gayoung106/gazero-wavve-webpage/assets/98731537/ad93953a-5476-4539-9a69-a9bbb95d4345)
  > 해결방법: 404문제는 경로 문제라고 함. 그래서 그냥 지우고 새로 임포트해줬더니, 404오류가 잡힘👏 !

### 다시 돌아와서 ! 두번째 swiper 만들기

#### 🌟 화면 구성 확인 및 CSS 수정

- swiper-container 클래스 자체가 1개 세트로 돌아가도록 해야함

![](https://velog.velcdn.com/images/gazero_/post/4a79efda-268f-45ab-b7ad-0bf2be086b0c/image.png)

1.  'swiper-container: 1번째 / swiper-container: 2번째 /...n번째' swiper-container를 감싸는 div class recommend_container를 만듦
    (즉, recommend_container안에 sipwer-container, swiper-container...이런식으로 들어가 있음)
2.  옆으로 넘어가는 스와이퍼이므로 스와이퍼의 부모 div에 display flex를 줌

#### 역시 글로 설명하는건 어려우니깐, 코드로 설명하자면 요론식👇

```html
<div class="recommend_container" style="display:flex">
  <div class="swiper-container">...</div>
  <div class="swiper-container">...</div>
</div>
```

3.  옆으로 배치가 되는 것을 확인 했음, 그러면 1개의 swiper-container세트만 보여지게 화면을 구성해야 함
    <img width="1356" alt="iShot_2023-07-30_21 07 23" src="https://github.com/gayoung106/gazero-wavve-webpage/assets/98731537/d600e4a4-a416-4972-b0bb-433f0b316e08">

- 더 상위 contents 클래스는 width:1240px임. overflow:hidden을 주고, 한 세트만 노출되게 적용

#### 🌟 JS

#### 💡 필요한 html요소 가져오기

1. (.swiper-container)[1] : swiper-container 클래스를 가진 요소들을 선택하고, 그중에서 두번째에 해당(인덱스[1])하는 부분을 선택
2. .second-button-prev
3. .second-button-next
4. .recommend_container
5. 슬라이드 너비를 계산하기 위해서 swiperContainer.childNodes[1]를 가져옴
   (swiperContainer = .swiper-container)

#### 💡 필요한 요소 변수로 저장

1. currentIndex: 현재(메인컨텐츠) 보여질 인덱스, 초깃값 0

#### 💡 필요한 함수

1. nextSet(): 다음 슬라이드 이동
2. pervSet(): 이전 슬라이드 이동

#### 💡 필요한 이벤트 리스너

1. click: 이전/다음 버튼을 통한 컨텐츠 이동

### 🩷완성된 두번째 swiper🩷

![iShot_2023-07-30_22 04 55](https://github.com/gayoung106/gazero-wavve-webpage/assets/98731537/041e508a-2d60-40c9-b992-31e2b5010dc0)

## 0802: 데이터모델링(erd 작업)

![gayoung_WavveProj](https://github.com/gayoung106/WebBase2023/assets/98731537/3db95305-dcc5-441b-ab41-647e33ad333c)

### Tables

- User
- Profile
- Membership
- Card
- MyList
- Content
- DetailContent
- Category
- Banner
- EditorPick
- LiveChart
- Update
- HBO
- Only
- Top20
- Comming
- SubTitle
- Dubbing
- ContentActor
- Language
- Actor
