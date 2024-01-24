// 삼각형의 완성조건 (2)

function solution(sides) {
    let longSide = Math.max(...sides);
    let shortSide = Math.min(...sides);
    let rmSideCnt = 0;
    
    // 긴 변 존재하는 경우
    for(let i = longSide - shortSide + 1; i <= longSide; i++) {
        rmSideCnt++;
    }
    
    // 긴 변 존재하지 않는 경우
    for(let i = longSide + 1; i < shortSide + longSide; i++) {
        rmSideCnt++;
    }
    return rmSideCnt;
}