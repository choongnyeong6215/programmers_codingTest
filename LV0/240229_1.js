// 특이한 정렬

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const aDist = Math.abs(a - n);
    const bDist = Math.abs(b - n);

    // 거리 같은 경우
    if (aDist === bDist) {
      return b - a;
    }

    return aDist - bDist;
  });
}
