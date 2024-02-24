// 평행

function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  // 좌표 1,2 연결 선과 좌표 3,4 연결 선 기울기 체크
  if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) {
    return 1;
  }

  // 좌표 1,3 연결 선과 좌표 2,4 연결 선 기울기 체크
  if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) {
    return 1;
  }

  // 좌표 1,4 연결 선과 좌표 2, 3 연결 선 기울기 체크
  if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) {
    return 1;
  }

  return 0;
}
