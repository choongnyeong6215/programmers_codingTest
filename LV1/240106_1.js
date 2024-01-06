// 최대공약수와 최소공배수

function solution(n, m) {
    let answer = [];
    let maxDivNum = 0;
    
    for(let i = 1; i <= Math.min(n,m); i++) {
        // 최대공약수
        if(Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0) {
            maxDivNum = i;
        }    
    }
    answer = [maxDivNum, (n * m) / maxDivNum];
    
    return answer;
}