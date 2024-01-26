// K번쨰수

function solution(array, commands) {
    let sliceArr = [];
    let answer = [];
    
    for(let s = 0; s < commands.length; s++) {
        let i = commands[s][0];
        let j = commands[s][1];
        let k = commands[s][2];
        
        sliceArr.push((array.slice(i - 1, j)).sort((a, b) => a - b));
        
        answer.push(sliceArr[s][k - 1]);
    }
    
    return answer;
}