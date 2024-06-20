javascript: (function () {
  /**
   * swagger 페이지 내 모든탭을 한번에 엽니다.
   * 구버전의 경우 새로고침 또는 공유받은 link로 정상 로딩되지 않는 문제가 있어,
   * 검색 편의를 위해 모든 탭을 열어 주소로 검색하기 위해 사용합니다.
   */
  Array.from(
    document.querySelectorAll('.wrapper > section > div > span > div > h4'),
  ).forEach((ele) => ele.click());
})();
