// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
    let sortedArr = strings.sort();
    
    return sortedArr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}