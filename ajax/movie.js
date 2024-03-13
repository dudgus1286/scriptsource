const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 어제 날짜 구하기
const init = () => {
  // 오늘날짜 구하기
  const today = new Date();

  // 년, 월, 일 변수에 담기
  const year = today.getFullYear();
  const month = Number(today.getMonth()) + 1;
  const day = Number(today.getDate()) - 1;

  // 화면 인풋 부분에 출력
  txtYear.value = year;
  // select value 값이 두 자리 숫자라서, 1 ~ 9 월 : "0"+month => 01, 02, ...
  selMon.value = month < 10 ? "0" + month : month;
  if (day < 10) {
    day = "0" + day;
  }
  selDay.value = day;
};

init();

function show(movieCd) {
  console.log(movieCd);

  let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;

  // 영화제목(한글) : movieNm
  // 영화제목(영어) : movieNmEn
  // 상영시간 : showTm
  // 감독 : directors : []
  // 배우 : actors : []
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let movieInfo = data.movieInfoResult.movieInfo;

      let content = `<ul>`;
      content += `<li>영화제목 : ${movieInfo.movieNm}</li>`;
      content += `<li>제목(영문) : ${movieInfo.movieNmEn}</li>`;
      content += `<li>상영시간 : ${movieInfo.showTm}</li>`;

      content += `<li>감독 : `;
      movieInfo.directors.forEach((director, idx) => {
        content += director.peopleNm;
      });
      content += `</li>`;

      content += `<li>출연진 : `;
      movieInfo.actors.forEach((actor, idx) => {
        content += movieInfo.actors[idx].peopleNm + " ";
      });
      content += `</li></ul>`;

      document.querySelector(".box2").innerHTML = content;
    })
    .catch(() => console.log("에러"));

  // box2 에 리스트 형식으로 출력
}

document.querySelector("button").addEventListener("click", () => {
  // 사용자가 선택한 날짜의 영상진흥위원회 박스 오피스 정보 가져오기
  let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  url += txtYear.value + selMon.value + selDay.value;

  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);

      let row = "";
      boxofficeList.forEach((movie) => {
        // 순위
        // 1 위 (▲ 0) : 파묘
        row += "<p>";
        row += movie.rank + " 위";
        if (movie.rankInten > 0) {
          row += " (▲ " + movie.rankInten + ") : ";
        } else if (movie.rankInten < 0) {
          row += " (▼ " + movie.rankInten + ") : ";
        } else {
          row += " : ";
        }
        row += `<a href="#" onclick="javascript:show(${movie.movieCd})">${movie.movieNm}</a></p>`;
      });
      document.querySelector("#msg").innerHTML = row;
    })
    .catch(() => {
      console.log("에러");
    });

  document.querySelector("#msg").style.textAlign = "left";
});
