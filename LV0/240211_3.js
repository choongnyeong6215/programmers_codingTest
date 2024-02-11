// 숨어잇는 숫자의 덧셈 (1)

function solution(my_string) {
    let sum = 0;
    
    for (let item of my_string) {
        if (/\d/.test(item)) {
            sum += Number(item);
        }
    }
    
    return sum;
}