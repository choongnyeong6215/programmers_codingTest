// 유한소수 판별하기

function solution(a, b) {
    let bunsu = [];
    let maxDivNum = 0;
    
    if(a > b) {
        maxDivNum = a;
    }
    else {
        maxDivNum = b;
    }
    
    // 최대공약수로 약분
    while(maxDivNum > 0) {
        if(a % maxDivNum === 0 && b % maxDivNum === 0) {
            bunsu = [a / maxDivNum, b / maxDivNum];
            break;
        }
        else {
            maxDivNum--;
        }
    }
    
    // 기약분수 분모
    let denom = bunsu[1];
    
    // 분모가 1이 되면 2와 5를 소인수로 갖지 않으므로 유한 소수
    while(denom % 2 === 0) {
        denom /= 2;
    }
    
    while(denom % 5 === 0) {
        denom /= 5;
    }
    
    return denom === 1 ? 1 : 2;
}