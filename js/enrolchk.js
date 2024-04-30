window.addEventListener("load", function () {
  // 헤더 스크롤 이벤트
  window.addEventListener("scroll", function () {
    var headerWrap = document.querySelector(".header-wrap");
    if (window.scrollY > 0) {
      headerWrap.classList.add("scrolled");
    } else {
      headerWrap.classList.remove("scrolled");
    }
  });

  // 페이지 내비게이션 렌더링
  const pgNaviContainer = document.querySelector(".pg-navi .inner");
  const nowPg = document.title;

  function renderPgNavi() {
    let html = `
          <div class="home">
            <i class="fa-solid fa-house"></i>
          </div>
          <span class="chevron"></span>
          <span class="cate">수강신청</span>
          <span class="chevron"></span>
          <span class="now-pg">${nowPg}</span>
        `;
    pgNaviContainer.innerHTML = html;
  }

  renderPgNavi();

  const userInfo = JSON.parse(localStorage.getItem("userInfoList"));
  const storedData = JSON.parse(localStorage.getItem("clickedValues"));

  if (userInfo && userInfo.length > 0) {
    const dataInit = document.getElementById("enrolchk-data");
    let html = "";

    // 첫 번째 객체를 참조하여 센터와 강의 값 가져오기
    const latestInfo = userInfo[0];

    // 센터와 강의 값이 있는지 확인하고 출력
    if (latestInfo.name) {
      html += `
        <li class="info-box-li">
            <p class="chk-info-title">수강자 성함</p>
            <p id="name-info" class="chk-info-data">${latestInfo.name}</p>
        </li>
      `;
    }
    if (latestInfo.mobile) {
      html += `
        <li class="info-box-li">
            <p class="chk-info-title">수강자 연락처</p>
            <p id="mobile-info" class="chk-info-data">${latestInfo.mobile}</p>
        </li>
      `;
    }

    dataInit.innerHTML += html; // 두 번째 정보값을 추가합니다.
  } else {
    console.log("저장된 데이터가 없습니다.");
  }

  if (storedData) {
    const dataInit = document.getElementById("enrolchk-data");
    let html = "";

    // 센터와 강의를 저장할 변수 초기화
    let latestCenter = "";
    let latestEnrol = "";

    // 최신 데이터가 존재하는 경우에만 처리
    if (storedData.length > 0) {
      // 모든 데이터를 반복하면서 센터와 강의에 대한 최신 값을 찾음
      storedData.forEach((item) => {
        if (item.centerValue) {
          latestCenter = item.centerValue;
        }
        if (item.dataValue) {
          latestEnrol = item.dataValue;
        }
      });

      // 센터와 강의에 대한 최신 값을 출력
      if (latestEnrol) {
        html += `
          <li class="info-box-li">
              <p class="chk-info-title">희망강의</p>
              <p id="lecture-info" class="chk-info-data">${latestEnrol}</p>
          </li>
        `;
      }
      if (latestCenter) {
        html += `
          <li class="info-box-li">
              <p class="chk-info-title">신청장소</p>
              <p id="center-info" class="chk-info-data">${latestCenter}</p>
          </li>
        `;
      }
    }
    let informaiton = `
    <li class="info-box-last">
    <p class="chk-info-detail">수강전반에 관한 안내사항은 작성해주신 연락처로 안내드립니다.</p>
    <p class="chk-info-detail">등록하신 강의는 <a href="#">수강신청 - 수강신청확인</a> 메뉴에서 확인하실 수 있습니다.</p>
    </li>
    `;

    dataInit.innerHTML += (html + informaiton);
  } else {
    console.log("저장된 데이터가 없습니다.");
  }
});
