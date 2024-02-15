// 숨어있는 숫자의 덧셈

function solution(my_string) {
    let isNum = my_string.match(/\d+/g);
    
    return isNum ? isNum.reduce((accr, curv) => accr + Number(curv), 0) : 0;
}