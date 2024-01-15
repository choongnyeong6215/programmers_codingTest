// 문자열 계산하기

function solution(my_string) {
    let arr = my_string.split(" ");
    
    // 첫 번째 숫자
    let answer = Number(arr[0]);
    
    arr.forEach((v, i) => {
        if(v === "+") {
            answer += Number(arr[i + 1]);
        }
        else if(v === "-") {
            answer -= Number(arr[i + 1]);
        }
    })
    return answer;
}