// 크기가 작은 부분 문자열

function solution(t, p) {
    let cnt = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let sliceWords = t.slice(i, p.length + i);
        
        if(Number(sliceWords) <= Number(p)) {
            cnt++;
        }
    }
    return cnt;
}