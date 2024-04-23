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

  // 지역 선택 데이터 로드
  fetch("data.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      if (data && data.enrollment_area && data.enrollment_area.length > 0) {
        AREA_ARR = data.enrollment_area;
        showArea();
        addActiveClass();
        showCenter(data.enrollment_area); // enrollment_area 전달
      } else {
        console.error("No review data found.");
      }
    })
    .catch(function (error) {
      console.error("Fetch error:", error);
    });

  let AREA_ARR;
  let areaTag = document.getElementById("data-area");

  function showArea() {
    let html = "";
    AREA_ARR.forEach((item, idx) => {
      html += `<li class="area-list-li">${item.location}</li>`;
    });
    areaTag.innerHTML = html;
  }

  function addActiveClass() {
    let firstListItem = document.querySelector(".area-list-li");
    if (firstListItem) {
      firstListItem.classList.add("active");
    }
  }

  // 클릭된 요소에 active 클래스 추가/제거
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("area-list-li")) {
      let allListItems = document.querySelectorAll(".area-list-li");
      allListItems.forEach(function (item) {
        item.classList.remove("active");
      });
      event.target.classList.add("active");
    }
    if (event.target.classList.contains("center-list-li")) {
      let allCenterItems = document.querySelectorAll(".center-list-li");
      allCenterItems.forEach(function (item) {
        item.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  });

  //showcenterlist
  let centerTag = document.getElementById("data-center");

  function showCenter(enrollment_area) {
    // 첫 번째 위치(location)에 해당하는 센터들 필터링
    let firstLocationCenters = AREA_ARR[0].centers; // 첫 번째 위치에 해당하는 센터들

    // 첫 번째 위치에 해당하는 센터들 출력
    let html = "";
    firstLocationCenters.forEach((center) => {
      html += `<li class="center-list-li">${center.name}</li>`;
    });
    centerTag.innerHTML = html;
  }

  // 클릭된 요소에 active 클래스 추가/제거 및 해당 위치에 속하는 센터들 출력
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("area-list-li")) {
      let selectedLocation = event.target.textContent; // 클릭된 위치
      let selectedCenters = AREA_ARR.find((item) => item.location === selectedLocation)?.centers; // 선택된 위치에 해당하는 센터들

      // 선택된 위치에 해당하는 센터들 출력
      if (selectedCenters) {
        let html = "";
        selectedCenters.forEach((center) => {
          html += `<li class="center-list-li">${center.name}</li>`;
        });
        centerTag.innerHTML = html;
      }
    }
  });
});
