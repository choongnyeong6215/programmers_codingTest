// OX퀴즈

function solution(quiz) {
    let answer = []
    
    quiz.forEach((v) => {
        let calculation = v.split(" ");
        let x = Number(calculation[0]);
        let y = Number(calculation[2]);
        let z = Number(calculation[4]);
        let operator = calculation[1];
        
        let result = 0;
        
        if (operator === "+") {
            result = x + y;
        }
        
        else if (operator === "-") {
            result = x - y;
        }
        
        if (result === z) {
            answer.push("O");
        }
        
        else {
            answer.push("X");
        }
    })
    
    return answer;
}