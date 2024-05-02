window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    var headerWrap = document.querySelector(".header-wrap");
    if (window.scrollY > 0) {
      headerWrap.classList.add("scrolled"); // 스크롤된 경우 scrolled 클래스 추가
    } else {
      headerWrap.classList.remove("scrolled"); // 스크롤이 상단에 위치한 경우 scrolled 클래스 제거
    }
  });

  // 반응형 (1024px) 햄버거바가 생겼을때
  // 햄버거버튼을 클릭했을때
  const navMb = document.querySelector(".nav-mb");
  const htmlRoot = document.querySelector("html");
  const mbt = document.querySelector(".mbt");

  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.remove("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.remove("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.remove("active");
    } else {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active");
    }
  });
  var menu1 = document.querySelector(".hd-menu1 > a");
  var menu2 = document.querySelector(".hd-menu2");
  menu1.addEventListener("click", function (e) {
    e.preventDefault();
    menu2.classList.toggle("active");
  });
  var menu3 = document.querySelector("#volunteer-apply > a");
  var menu4 = document.querySelector(".hd-menu3");
  menu3.addEventListener("click", function (e) {
    e.preventDefault();
    menu4.classList.toggle("active");
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
              <span class="cate">교육봉사신청</span>
              <span class="chevron"></span>
              <span class="now-pg">${nowPg}</span>
            `;
    pgNaviContainer.innerHTML = html;
  }

  renderPgNavi();

  //지역 선택 토글 메뉴
  this.fetch("data.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      if (data && data.detail_area && data.detail_area.length > 0) {
        AREA_SELEC = data.detail_area;
        showAreaSelec();
      } else {
        console.error("No area data found.");
      }
    })
    .catch(function (error) {
      console.error("Fetch error:", error);
    });

  let AREA_SELEC;
  let areaUlTag = this.document.getElementById("data-area-selec");

  function showAreaSelec() {
    let html = "";
    AREA_SELEC.forEach((item, idx) => {
      html += `
        <li data-area = "${item.location}">${item.location}</li>
        `;
    });
    areaUlTag.innerHTML = html;
  }

  // p 태그를 클릭하여 지역 선택 목록 표시/숨김
  const areaSelec = document.getElementById("area-selec");
  areaSelec.addEventListener("click", function () {
    // 현재 표시 여부를 확인하여 토글
    if (areaUlTag.classList.contains("show")) {
      areaUlTag.classList.remove("show");
    } else {
      areaUlTag.classList.add("show");
    }
  });

  // 클릭된 지역을 선택하여 해당 지역의 내용을 표시
  areaUlTag.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const selectedArea = event.target.dataset.area;
    //   const carrot = document.querySelector(".fa-caret-down");
    //   areaSelec.textContent = selectedArea + carrot;
      areaUlTag.classList.remove("show");
    }
  });
});
