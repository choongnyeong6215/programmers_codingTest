// 겹치는 선분의 길이

function solution(lines) {
  const startPoint = lines.map((v) => v[0]); // 출발점
  const endPoint = lines.map((v) => v[1]); // 시작점

  let repeatCnt = 0;
  let repeatLineLength = 0;

  for (let i = Math.min(...startPoint); i <= Math.max(...endPoint); i++) {
    for (let j = 0; j < lines.length; j++) {
      // 겹치는 부분 체크
      if (i >= startPoint[j] && i < endPoint[j]) {
        repeatCnt++;
      }
    }

    if (repeatCnt >= 2) {
      repeatLineLength++;
    }

    // 중복 카운트 초기화
    repeatCnt = 0;
  }

  return repeatLineLength;
}
