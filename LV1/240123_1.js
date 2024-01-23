// 시저 암호

function solution(s, n) {
    let answer = "";
    
    for(let i = 0; i < s.length; i++) {
        let asciCode = s.charCodeAt(i);
        
        if(s[i] === " ") {
            answer += " ";
        }
        
        // 대문자
        if(asciCode >= 65 && asciCode <= 90) {
            if(asciCode + n > 90) {
                answer += String.fromCharCode(asciCode + n - 26);
            }
            else {
                answer += String.fromCharCode(asciCode + n);
            }
        }
        
        // 소문자
        if(asciCode >= 97 && asciCode <= 122) {
            if(asciCode + n > 122) {
                answer += String.fromCharCode(asciCode + n - 26);
            }
            else {
                answer += String.fromCharCode(asciCode + n);
            }
        }
    }
    
    return answer;
}