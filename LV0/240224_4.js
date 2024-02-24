// 유한소수 판별하기

function solution(a, b) {
  let fraction = [];
  let maxDivNum = Math.max(a, b);

  // 기약분수로 만들기
  while (maxDivNum > 0) {
    if (a % maxDivNum === 0 && b % maxDivNum === 0) {
      fraction = [a / maxDivNum, b / maxDivNum];
      break;
    } else {
      maxDivNum--;
    }
  }

  // 분모가 1일경우 2,5를 소인수로 같지 않음으로 유한소수
  while (fraction[1] % 2 === 0) {
    fraction[1] /= 2;
  }

  while (fraction[1] % 5 === 0) {
    fraction[1] /= 5;
  }

  return fraction[1] === 1 ? 1 : 2;
}
