javascript: (function () {
  /**
   * 신한카드 사용 내역을 기준으로 짤짤이 적립금 총합을 계산한다.
   */
  alert(
    Array.from(
      $('tr:not(.middleSum) td[headers="tbl_id_a1 tbl_id_a1_1"].textR'),
    )
      .map((item) => Number($(item).text().replace(/[^\d]/g, '')))
      .filter((p) => p > 5000)
      .map((p) => p % 1000)
      .reduce((t, p) => t + p, 0) + '원',
  );
})();
