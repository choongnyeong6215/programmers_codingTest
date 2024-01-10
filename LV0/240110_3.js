// 컨트롤 제트

function solution(s) {
    let sum = 0;
    let sArr = s.split(" ");
    
    for(let i = 0; i < sArr.length; i++) {
        if(sArr[i] === "Z") {
            sum -= Number(sArr[i-1]);
        }
        else {
            sum += Number(sArr[i]);
        }
    }
    return sum;
}