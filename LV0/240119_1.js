// 외계어 사전

function solution(spell, dic) {
    let existsArr = [];
    
    for(let words of dic) {
        let cnt = 0;
        
        for(let alp of spell) {
            if(words.includes(alp)) {
                cnt++;
            }
        }
        
        if(cnt === spell.length) {
            existsArr.push(words);
        }
    }
    return existsArr.length !== 0 ? 1 : 2;
}