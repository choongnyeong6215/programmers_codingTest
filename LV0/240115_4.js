// 헌 번만 등장한 문자

function solution(s) {
    let arr = s.split("");
    let answer = [];
    
    arr.forEach((item) => {
        if(arr.indexOf(item) === arr.lastIndexOf(item)) {
            answer.push(item);
        }
    })
    return answer.sort().join("");
}