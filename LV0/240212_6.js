// 가장 큰 수 찾기

function solution(array) {
    
    let maxNum = Math.max(...array)
    let maxNumIdx = array.findIndex((v) => v === maxNum);
    
    return [maxNum, maxNumIdx];
}