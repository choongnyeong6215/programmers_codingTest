// 약수의 갯수와 덧셈

function solution(left, right) {
    let answer = 0;
    let divArr = [];
    
    for(let i = left; i <= right; i++) {
        // 배열 초기화
        divArr = [];
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                divArr.push(j);
            }
        }
        if(divArr.length % 2 === 0) {
            answer += i;
        }
        else {
            answer -= i;
        }
    }
    return answer;
}
