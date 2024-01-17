// 공 던지기

function solution(numbers, k) {
    let idx = 0;
    
    for(let i = 0; i < k - 1; i++) {
        idx += 2;
        
        if(idx > numbers.length) {
            idx -= numbers.length;
        }
    }
    return numbers[idx];
}