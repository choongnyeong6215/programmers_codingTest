// 컨트롤 제트

function solution(s) {
    let sum = 0;
    let arr = s.split(" ");
    
    arr.forEach((v, i) => {
        if (v === "Z") {
            console.log(arr[i - 1]);
            sum -= Number(arr[i - 1]);
        }
        else {
            sum += Number(v);
        }
    })
    
    return sum;
}