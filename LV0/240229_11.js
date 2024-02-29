// 연속된 수의 합

function solution(num, total) {
  const answer = [];

  // 중앙 값 기준점으로 간주
  const stdNum = Math.ceil(total / num);

  // 시작점
  const startPoint = stdNum - Math.floor(num / 2);

  for (let i = 0; i < num; i++) {
    answer.push(startPoint + i);
  }

  return answer;
}
