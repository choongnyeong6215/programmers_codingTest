// 다음에 올 숫자

function solution(common) {
  // 등차수열
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[common.length - 1] + (common[2] - common[1]);
  }

  // 등비수열
  else if (common[1] / common[0] === common[2] / common[1]) {
    return common[common.length - 1] * (common[2] / common[1]);
  }
}
