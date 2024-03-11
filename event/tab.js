// li 클릭 시 orange 클래스명 옮기기
// div 의 show 클래스명 옮기기
// 세 개의 버튼 찾기
const tabButton1 = document.querySelector(".tab-button:nth-of-type(1)");
const tabButton2 = document.querySelector(".tab-button:nth-of-type(2)");
const tabButton3 = document.querySelector(".tab-button:nth-of-type(3)");

const content1 = document.querySelector(".tab-content:nth-of-type(1)");
const content2 = document.querySelector(".tab-content:nth-of-type(2)");
const content3 = document.querySelector(".tab-content:nth-of-type(3)");

tabButton1.addEventListener("click", () => {
  // 이 버튼에 orange 클래스명 추가
  tabButton1.classList.add("orange");
  // 다른 li에 orange 클래스명 제거
  tabButton2.classList.remove("orange");
  tabButton3.classList.remove("orange");

  // 첫번째 div 에 show 클래스명 추가
  content1.classList.add("show");
  // 다른 div의 show 클래스명 제거
  content2.classList.remove("show");
  content3.classList.remove("show");
});

tabButton2.addEventListener("click", () => {
  tabButton2.classList.add("orange");
  tabButton1.classList.remove("orange");
  tabButton3.classList.remove("orange");

  content2.classList.add("show");
  content1.classList.remove("show");
  content3.classList.remove("show");
});

tabButton3.addEventListener("click", () => {
  tabButton3.classList.add("orange");
  tabButton2.classList.remove("orange");
  tabButton1.classList.remove("orange");

  content3.classList.add("show");
  content1.classList.remove("show");
  content2.classList.remove("show");
});
