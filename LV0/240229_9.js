// 문자열 밀기

function solution(A, B) {
  const arr = [...A];
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (A === B) return 0;
    // 마지막 요소 앞으로 삽입하며 비교
    else {
      arr.unshift(arr.pop());
      cnt++;
    }

    if (arr.join("") === B) return cnt;
  }

  return -1;
}
