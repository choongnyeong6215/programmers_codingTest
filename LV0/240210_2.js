// 공 던지기

function solution(numbers, k) {
    let throwPlayer = 1;
    
    for (let i = 1; i < k; i++) {
        throwPlayer += 2;
        
        // 마지막 요소에서 첫 요소로 돌아오도록
        if(throwPlayer > numbers.length) {
            throwPlayer -= numbers.length;
        }
    }
    
    return throwPlayer;
}