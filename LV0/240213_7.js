// 중복된 숫자 개수

function solution(array, n) {
    let cnt = 0;
    
    for (let num of array) {
        if (num === n) {
            cnt++;
        }
    }
    
    return cnt;
}