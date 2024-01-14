// 등수 매기기

function solution(score) {
    let avg = [];
    let rank = []
    
    for(let i = 0; i < score.length; i++) {
        let total = 0;
        for(let j = 0; j < score[i].length; j++) {
            total += score[i][j];
        }
        avg.push(total / score[i].length);
    }
    
    
    for(let i = 0; i < avg.length; i++) {
        let score = 1;
        for(let j = 0; j < avg.length; j++) {
            if(avg[i] < avg[j]) {
                score++;
            }
        }
        rank.push(score);
    }
    return rank;
}