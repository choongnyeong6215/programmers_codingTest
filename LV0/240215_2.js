// 안전지대

function solution(board) {
  let safetyZone = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 위험지역일때 상하좌우, 대각선 체크
      if (board[i][j] === 1) {
        // 벽 가장자리에 폭탄이 위치했는지 확인 -> 위험지역으로 변경

        // 상
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        // 하
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        // 좌
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        // 우
        if (j !== board.length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        // ↖️
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        // ↗️
        if (i !== 0 && j !== board.length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        // ↘️
        if (
          i !== board.length - 1 &&
          j !== board.length - 1 &&
          board[i + 1][j + 1] !== 1
        ) {
          board[i + 1][j + 1] = 2;
        }
        // ↙️
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
      }
    }
  }

  board.forEach((zone) => zone.forEach((v) => (v === 0 ? safetyZone++ : null)));

  return safetyZone;
}
