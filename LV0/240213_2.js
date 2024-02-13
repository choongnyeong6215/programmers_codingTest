// 제곱수 판별하기

function solution(n) {
    return Math.pow(Math.floor(Math.sqrt(n)), 2) === n ? 1 : 2;
}