// 합성수 찾기

function solution(n) {
    
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        let factorCnt = 0;
        
        for (let j = 1; j <= i; j++) {
            if(i % j === 0) {
                factorCnt++;
            }
        }
        
        if(factorCnt >= 3) {
            answer.push(i);
        }
        
    }
    
    return answer.length;
}