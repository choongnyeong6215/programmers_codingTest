// 소수 찾기

// 소수 판별
function isPrime(num) {
    if(num === 1) {
        return false;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    
    return true;
}


function solution(n) {
    let answer = [];
    
    for(let i = 1; i <= n; i++) {
        let stdNum = i;
        
        if(isPrime(stdNum)) {
            answer.push(stdNum);
        }
    }
    
    return answer.length;
}