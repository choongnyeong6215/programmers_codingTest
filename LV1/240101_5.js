// 문자열 내림차순으로 배치하기

function solution(s) {
    let sArr = s.split("");
    let asciArr = [];
    let finalArr = [];
    
    for(let item of sArr) {
        asciArr.push(item.charCodeAt());
    }
    
    asciArr.sort((a, b) => b - a);
    
    for(let item of asciArr) {
        finalArr.push(String.fromCharCode(item));
    }
    return finalArr.join("");
}
