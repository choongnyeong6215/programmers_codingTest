// 소인수분해

function solution(n) {
    let answer = [];
    let divNum = 2;
    
    while(n >= 2) {
        if(n % divNum === 0) {
            answer.push(divNum);
            n /= divNum;
        }
        else {
            divNum++;
        }
    }
    return [...new Set(answer)];
}