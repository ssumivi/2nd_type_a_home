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

  // local storage
  const storedData = JSON.parse(localStorage.getItem("clickedValues"));
  if (storedData) {
    const dataInit = this.document.getElementById("data-info");
    html = "";
    storedData.forEach( (item) => {
      const tag = `
      <li class="enrol-info-li">신청하신 지역은 <b>${item.areaValue}, ${item.centerValue}</b> 입니다.</li>
                <li class="enrol-info-li">희망하신 강의는 <b>${item.dataValue}</b> 입니다.</li>
                <li class="sub-link">
                  <a href="edu_list.html">강의 지역 및 장소 / 강의 재선택하기</a>
                </li>
      `;
      html += tag;
    });
    dataInit.innerHTML = html;
  } else {
    console.log("저장된 데이터가 없습니다.");
  }
});
