// 숨어있는 숫자의 덧셈 (2)

function solution(my_string) {
    let regex = /\d+/g;
    let matching = my_string.match(regex);
    
    if(!matching) {
        return 0;
    }
    else {
        return my_string.match(/\d+/g).reduce((accr, curv) => accr + Number(curv), 0);
    }
}