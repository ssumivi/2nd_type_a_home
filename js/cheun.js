window.addEventListener("load", function() {
  window.addEventListener('scroll', function() {
    var headerWrap = document.querySelector('.header-wrap');
    if (window.scrollY > 0) {
      headerWrap.classList.add('scrolled'); // 스크롤된 경우 scrolled 클래스 추가
    } else {
      headerWrap.classList.remove('scrolled'); // 스크롤이 상단에 위치한 경우 scrolled 클래스 제거
    }
  });

  // 반응형 (1024px) 햄버거바가 생겼을때
  // 햄버거버튼을 클릭했을때
  const navMb = document.querySelector(".nav-mb");
  const htmlRoot = document.querySelector("html");
  const mbt = document.querySelector(".mbt");

  mbt.addEventListener("click", function() {
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
  document.querySelector('.hd-menu1').addEventListener('mouseenter', function() {
    document.querySelector('.hd-menu2').style.display = 'block';
  });
  document.querySelector('.hd-menu1').addEventListener('mouseleave', function() {
    document.querySelector('.hd-menu2').style.display = 'none';
  });

  // 교육과정찾기 메뉴에 대한 이벤트 핸들러
  document.querySelector('.hd-menu2').addEventListener('click', function() {
    // 여기에 교육과정찾기 메뉴를 클릭했을 때 실행할 동작을 작성합니다.
    // 예를 들어 다른 페이지로 이동하는 코드를 작성할 수 있습니다.
    // window.location.href = "교육과정찾기 페이지 URL";
    alert("교육과정찾기 페이지로 이동합니다.");
  });
  var menu1 = document.querySelector('.hd-menu1');
  var menu2 = document.querySelector('.hd-menu2');

  // 수강신청 메뉴에 대한 이벤트 핸들러
  menu1.addEventListener('mouseenter', function() {
    // 교육과정찾기 메뉴를 보여줍니다.
    menu2.style.display = 'block';
  });

  menu1.addEventListener('mouseleave', function() {
    // 마우스가 수강신청 메뉴에서 떠날 때 교육과정찾기 메뉴를 숨깁니다.
    setTimeout(function() {
      menu2.style.display = 'block';
      
    },); // 200ms 후에 메뉴를 숨깁니다.
  });

  // 교육과정찾기 메뉴에 대한 이벤트 핸들러
  menu2.addEventListener('mouseenter', function() {
    // 마우스가 교육과정찾기 메뉴에 올라갔을 때도 메뉴를 보여줍니다.
    menu2.style.display = 'block';
  });

  menu2.addEventListener('mouseleave', function() {
    // 마우스가 교육과정찾기 메뉴에서 떠날 때 메뉴를 숨깁니다.
    menu2.style.display = 'none';
  });
});