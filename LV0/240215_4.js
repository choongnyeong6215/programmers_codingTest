// 외계어 사전

function solution(spell, dic) {
    let existsWord = [];
    
    for (let word of dic) {
        let cnt = 0;
        
        for (let alphabet of spell) {
            if (word.includes(alphabet)) {
                cnt++;
            }
            
            // 카운트, 한번씩 사용해야 할 리스트의 길이가 같으면 한번씩 사용한 것으로 간주
            if (cnt === spell.length) {
                existsWord.push(word);
            }
        }
    }
    
    return existsWord.length ? 1 : 2;
}