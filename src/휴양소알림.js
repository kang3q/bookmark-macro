javascript: (function () {
  /**
   * 사내 휴양소 잔여 객실 알림 받기
   */
  var targetStr = prompt(
    '봇토큰, 챗id, 찾고자 하는 날짜를 입력하세요.\n예) bot123:ABC, 1111111, 1,8,15',
  );
  if (!targetStr) return alert('입력하세요. 종료합니다.');
  var splitData = targetStr.split(',').map((d) => d.trim());
  if (splitData.length < 3) return alert('봇토큰, 챗id, 날짜를 입력하세요.');
  var token = splitData.shift(); /*  */
  var chatId = splitData.shift(); /*  */
  var targetDates = splitData;
  var timer = setInterval(function () {
    $('#searchBtn').click();
    console.log('검색');
    setTimeout(() => {
      console.log('찾기');
      $('.ui-datepicker-calendar tbody tr a[data-custom]').each(function () {
        var date = $(this).text().trim();
        if (targetDates.includes(date)) {
          fetch(
            'https://api.telegram.org/' +
              token +
              '/sendMessage?chat_id=' +
              chatId +
              '&text=heyy+홍천+잔여객실+' +
              date +
              '일',
          );
          clearInterval(timer);
          throw '그만';
        }
      });
    }, 2000);
  }, 10000);
})();
