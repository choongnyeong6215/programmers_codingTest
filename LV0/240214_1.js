// 직사각형 넓이 구하기

function solution(dots) {
    let x = dots.map((v) => v[0]);
    let y = dots.map((v) => v[1]);
    
    x = Math.max(...x) - Math.min(...x);
    y = Math.max(...y) - Math.min(...y);
    
    
    return x * y;
}