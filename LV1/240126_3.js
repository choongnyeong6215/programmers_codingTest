// 가장 가까운 같은 글자

function solution(s) {
    let storeArr = [];
    let answer = [];
    
    [...s].forEach((txt) => {
        if(!storeArr.includes(txt)) {
            answer.push(-1);
        }
        else {
            answer.push(storeArr.length - storeArr.lastIndexOf(txt));
        }
        
        storeArr.push(txt);
    })
    
    return answer;
}