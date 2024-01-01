// 핸드폰 번호 가리기

function solution(phone_number) {
    let answer = "";
    let lastFourNum = phone_number.split("").slice(-4).join("");
    
    answer = "*".repeat(phone_number.length - 4) + lastFourNum;
    
    return answer;
}
