// 팩토리얼

function solution(n) {
    
    let factorialNum = 1;
    let answer = [];
    
    for(let i = 1; i <= n; i++) {
        factorialNum *= i;
        
        if(factorialNum > n) {
            break;
        }
        
        else {
            answer.push(i);
        }
    }
    
    return answer.sort((a, b) => b - a)[0];
}