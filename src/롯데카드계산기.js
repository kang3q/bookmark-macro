javascript: (function () {
  /**
   * 롯데카드 사용 내역을 기준으로 할인 금액과 할인율 계산
   */
  var 할인합 = $('.toggle .bnf')
    .map(function () {
      return parseInt($(this).text().replace(/[^\d]/g, ''));
    })
    .get()
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  var 총사용금 = $('.totPrice').text();
  var 총할인율 =
    Math.round((할인합 / Number(총사용금.replace(/[^\d-]/g, ''))) * 10000) /
    100;
  alert(
    '총 ' +
      총사용금 +
      ' (최종 할인율: ' +
      총할인율 +
      '%)\n15% 할인: ' +
      할인합 +
      '원' +
      '\n짤짤이합: ' +
      $('.toggle em')
        .get()
        .map((ele) =>
          Number(
            $(ele)
              .text()
              .replace(/[^\d-]/g, ''),
          ),
        )
        .reduce((acc, curr) => {
          return acc + (curr % 1000);
        }, 0),
  );
})();
