// 문자열 다루기 기본

function solution(s) {
    
    return s.replace(/[0-9]/g,'').length === 0 && (s.length === 4 || s.length === 6);
}