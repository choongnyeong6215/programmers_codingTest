// 옹알이 (1)

function solution(babbling) {
  const regexp = /aya|ye|woo|ma/g;

  return babbling.map((v) => v.replace(regexp, "")).filter((v) => v === "")
    .length;
}
