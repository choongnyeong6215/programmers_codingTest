// 삼각형의 완성조건 (1)

function solution(sides) {
    let longestSide = Math.max(...sides);
    let totalSide = sides.reduce((accr, curv) => accr + curv, 0);
    
    return longestSide < totalSide - longestSide ? 1 : 2;
}