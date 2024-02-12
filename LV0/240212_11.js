// 자릿수 더하기

function solution(n) {
    return n.toString().split("").reduce((accr, curv) => accr + Number(curv), 0);
}