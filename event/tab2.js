// tab.js 간략화 수정
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    // 버튼 영역에 필요없는 클래스명 전부 제거
    buttons.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 이벤트가 일어난 버튼에 orange 클래스명 추가
    btn.classList.add("orange");

    // 컨텐츠 영역에 필요없는 클래스명 전부 제거
    contents.forEach((item) => {
      item.classList.remove("show");
    });
    // 해당 버튼에 해당하는 컨텐츠에 show 클래스명 추가
    contents[idx].classList.add("show");
  });
});
