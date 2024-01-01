// 없는 숫자 더하기

function solution(numbers) {
    let sortNumArr = numbers.sort((a,b) => a - b);
    let sum = 0;
    
    for(let i = 0; i <= 9; i++) {
        if(!sortNumArr.includes(i)) {
            sum += i;
        }
    }
    return sum;
}
