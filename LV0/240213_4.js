// 문자열 정렬하기 (2)

function solution(my_string) {
    let asciArr = [];
    let answer = "";
    
    for (let txt of my_string) {
        asciArr.push(txt.toLowerCase().charCodeAt());
    }
    
    asciArr.sort((a, b) => a - b);
    
    for (let num of asciArr) {
        answer += String.fromCharCode(num);
    }
    
    return answer;
}