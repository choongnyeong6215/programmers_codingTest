// 직사각형 넓이 구하기

function solution(dots) {
    let x = Math.max(...dots.map((x) => x[0])) - Math.min(...dots.map((x) => x[0]));
    let y = Math.max(...dots.map((y) => y[1])) - Math.min(...dots.map((y) => y[1]));
    
    return x * y;
}