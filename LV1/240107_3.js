// 숫자 문자열과 영단어

function solution(s) {
    
    let alpha = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    alpha.forEach((v, idx) => {
        s = s.replaceAll(v, idx);
    })
    return Number(s);
}