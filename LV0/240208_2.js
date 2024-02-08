// 외계행성의 나이

function solution(age) {
    let answer = "";
    let code = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    
    String(age).split("").forEach((v, idx) => {
        answer += code[v];
    })
    
    return answer;
}