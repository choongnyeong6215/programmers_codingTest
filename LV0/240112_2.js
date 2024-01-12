// 문자열 밀기

function solution(A, B) {
  
    let answer = -1;
    
    if(A === B) {
        return 0;
    }
    
    for(let i = 1; i < A.length; i++) {
        let lastWords = A.slice(-i);
        let rmWords = A.slice(0, A.length - i);
        
        if(lastWords.concat(rmWords) === B) {
            answer = i;
            break;
        }
    }
    return answer;
}