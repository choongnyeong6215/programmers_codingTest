// 7의 개수

function solution(array) {
    return array.toString().split("").filter((v) => v === "7").length;
}