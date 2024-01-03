// 부족한 금액 계산하기

function solution(price, money, count) {
    let answer = 0;
    let curPriceArr = [];
    
    curPriceArr.push(price);
    
    
    for(let i = 1; i < count; i++) {
        curPriceArr.push(curPriceArr[i-1] + price);
    }
    
    if(money >= curPriceArr.reduce((accr, curv) => accr + curv, 0)) {
       return 0;
    }
    else {
        return curPriceArr.reduce((accr, curv) => accr + curv, 0) - money;        
    }

}