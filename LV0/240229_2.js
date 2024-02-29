// 등수 매기기

function solution(score) {
  const avgArr = [];

  for (let i = 0; i < score.length; i++) {
    const avg = (score[i][0] + score[i][1]) / 2;

    avgArr.push(avg);
  }

  const rank = Array.from({ length: avgArr.length }, (v) => 1);

  for (let i = 0; i < avgArr.length; i++) {
    for (let j = 0; j < avgArr.length; j++) {
      // 동일인물 체크 생략
      if (avgArr[j] === avgArr[i]) continue;

      if (avgArr[j] < avgArr[i]) {
        rank[j]++;
      }
    }
  }

  return rank;
}
