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
  const storedData = JSON.parse(localStorage.getItem("clickedValues"));
  if (storedData) {
    const dataInit = document.getElementById("data-info");
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
      if (latestCenter) {
        html += `
          <li class="enrol-info-li">신청하신 지역은 <b>${latestCenter}</b> 입니다.</li>
        `;
      }
      if (latestEnrol) {
        html += `
          <li class="enrol-info-li">희망하신 강의는 <b>${latestEnrol}</b> 입니다.</li>
        `;
      }

      // "강의 지역 및 장소 / 강의 재선택하기" 링크 추가
      html += `
        <li class="sub-link">
          <a href="edu_list.html">강의 지역 및 장소 / 강의 재선택하기</a>
        </li>
      `;
    }

    dataInit.innerHTML = html;
  } else {
    console.log("저장된 데이터가 없습니다.");
  }

  // 이름 유효성 검사 함수
  function validateName(name) {
    // 이름 유효성을 검사하는 정규식
    let nameRegex = /^[가-힣]{2,}$/;
    // 유효성 검사 결과를 반환
    return nameRegex.test(name);
  }

  // 전화번호 유효성 검사 함수
  function validatePhoneNumber(phoneNumber) {
    // 전화번호 유효성을 검사하는 정규식
    let phoneNumberRegex = /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;
    // 유효성 검사 결과를 반환
    return phoneNumberRegex.test(phoneNumber);
  }

  // 사용자 정보를 저장하는 함수
  function saveUserInfo() {
    // 성함과 연락처를 가져옴
    const userName = document.getElementById("user-name").value;
    const userMobile = document.getElementById("user-mobile").value;
    const nameError = document.getElementById("name-error");
    const mobileError = document.getElementById("mobile-error");

    // 이름 유효성 검사
    if (!validateName(userName)) {
      nameError.textContent = "성함을 한글로 2글자 이상 입력해주세요.";
      nameError.classList.add("error-message"); // 오류 메시지를 표시할 요소에 클래스 추가
      return;
    } else {
      nameError.textContent = "";
      nameError.classList.remove("error-message"); // 오류 메시지를 표시할 요소에 클래스 제거
    }

    // 전화번호 유효성 검사
    if (!validatePhoneNumber(userMobile)) {
      mobileError.textContent = "올바른 전화번호 형식이 아닙니다. 전화번호는 10자리 또는 11자리의 숫자로 입력해주세요.";
      mobileError.classList.add("error-message"); // 오류 메시지를 표시할 요소에 클래스 추가
      return;
    } else {
      mobileError.textContent = "";
      mobileError.classList.remove("error-message"); // 오류 메시지를 표시할 요소에 클래스 제거
    }

    // 사용자 정보를 객체로 만들어서 로컬 스토리지에 저장
    localStorage.setItem("userInfo", JSON.stringify({ name: userName, mobile: userMobile }));

    // 버튼에 "active" 클래스 추가
    document.querySelector(".submit-btn").classList.add("active");
  }
});
