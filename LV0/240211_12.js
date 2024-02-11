// 대문자와 소문자

function solution(my_string) {
    let answer = "";
    
    for(let txt of my_string) {
        if (/[a-z]/g.test(txt)) {
            answer += txt.toUpperCase();
        }
        else {
            answer += txt.toLowerCase();
        }
    }
    
    return answer;
}