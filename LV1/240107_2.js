// 이상한 문자 만들기

function solution(s) {
    let answer = [];
    let words = s.split(" ");
    
    for(let i = 0; i < words.length; i++) {
        let tmpTxt = "";
        
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                tmpTxt += words[i][j].toUpperCase();
            }
            else {
                tmpTxt += words[i][j].toLowerCase();
            }
        }
        answer.push(tmpTxt);
    }
    
    return answer.join(" ");
}