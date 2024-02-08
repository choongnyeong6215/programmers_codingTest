// 개미 군단

function solution(hp) {
    let gAnt = Math.floor(hp / 5);
    let bAnt = Math.floor((hp % 5) / 3);
    let iAnt = hp % 5 % 3;
    
    return gAnt + bAnt + iAnt;
}