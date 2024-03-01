// 크기가 작은 부분 문자열

function solution(t, p) {
  const sliceArr = [];

  for (let i = 0; i < t.length; i++) {
    sliceArr.push(t.slice(i, i + p.length));
  }

  return sliceArr.filter((v) => v.length === p.length && Number(v) <= Number(p))
    .length;
}
