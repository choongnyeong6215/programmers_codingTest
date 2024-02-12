// 문자열 계산하기

function solution(my_string) {
    let arr = my_string.split(" ");
    
    let x = Number(arr[0]);
    
    arr.forEach((v, idx) => {
        if (v === "+") {
            x += Number(arr[idx + 1]);
        }
        else if (v === "-") {
            x -= Number(arr[idx + 1]);
        }
    })
    
    return x;
}