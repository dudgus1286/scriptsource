// 폼 submit 일어나면 submit 중지 후
// required
// 각각의 input value가 들었는지 확인

// 각 input value 가 어떤 특정 조건을 만족하는지 확인
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userid = document.querySelector("#userid");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  const regid = /(?=^[A-Za-z])(?=.+\d)[A-Za-z\d]{6,12}$/;
  const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@$%])[A-Za-z\d!@$%]{8,15}$/;

  // true 자료 : 0을 제외한 숫자, '문자', [객체], {배열}
  // false 자료 : 0, "", null, undefind, NaN

  // if(user.value =='')
  // if(user.value.length == 0) 로도 표현가능

  if (!userid.value || !regid.test(userid.value)) {
    userid.nextElementSibling.classList.add("show");
  } else {
    userid.nextElementSibling.classList.remove("show");
  }

  if (!password.value || regPwd.test(password.value)) {
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }

  if (!confirmPassword.value || regPwd.test(confirmPassword.value)) {
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    confirmPassword.nextElementSibling.classList.remove("show");
  }

  // password == confirm-password
  // 이전 비밀번호와 다릅니다
  if (confirmPassword.value != password.value) {
    confirmPassword.nextElementSibling.textContent = "이전 비밀번호와 다릅니다";
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    // password, confirm 둘 다 입력 안 된 경우 값이 동일하기 때문에 이 코드가 실행됨
    if (confirmPassword.value) {
      confirmPassword.nextElementSibling.classList.remove("show");
    }
  }

  //   const input = document.querySelectorAll("input");
  //   input.forEach((item, idx) => {
  //     if (!item.value) {
  //       item.nextElementSibling.classList.add("show");
  //     } else {
  //       item.nextElementSibling.classList.remove("show");
  //     }
  //   });
});
