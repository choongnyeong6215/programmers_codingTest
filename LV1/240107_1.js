// 예산

function solution(d, budget) {
    let answer = 0;
    let totalPrice = 0;
    
    d.sort((a,b) => a - b).map((price) => {
        if(totalPrice + price <= budget) {
            totalPrice += price;
            answer++;
        }
    })
    return answer;
}   