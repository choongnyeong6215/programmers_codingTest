// OX퀴즈

function solution(quiz) {
    let answer = [];
    
    quiz.forEach((v) => {
        let calculation = v.split(" ");
        
        let res = 0;              // 계산식
        let z = Number(calculation[4]);   // 결과
        
        let x = Number(calculation[0]);
        let y = Number(calculation[2]);
        
        if(calculation[1] === "+") {
            res = x + y;
        }
        else if(calculation[1] === "-") {
            res = x - y;
        }
        
        if(res === z) {
            answer.push("O");
        }
        else {
            answer.push("X");
        }
    })
    
    return answer;
}