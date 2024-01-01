// 콜라츠 추측

function solution(num) {
    let divCnt = 0;
    
    while(num !== 1) {
        if(num % 2 === 0) {
            num /= 2;
        }
        else {
            num = num * 3 + 1;
        }
        divCnt++;
    }
    
    if(divCnt >= 500) {
        return -1;
    }
    else {
        return divCnt;
    }
}