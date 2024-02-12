// n의 배수 고르기

function solution(n, numlist) {
    
    let answer = [];
    
    numlist.forEach((v, idx) => {
        if (v % n === 0) {
            answer.push(v);
        }
    })
    
    return answer;
}