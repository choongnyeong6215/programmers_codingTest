// k의 개수

function solution(i, j, k) {
  let cnt = 0;

  for (let a = i; a <= j; a++) {
    const item = String(a).split("");

    for (let b = 0; b < item.length; b++) {
      if (item[b].includes(k)) cnt++;
    }
  }

  return cnt;
}
