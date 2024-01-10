// k의 개수

function solution(i, j, k) {
    let cnt = 0;
    
    for(let m = i; m <= j; m++) {
        let arr = String(m).split("");
        
        for(let n = 0; n < arr.length; n++) {
            if(arr[n].includes(k)) {
                cnt++;
            }
        }
    }
    return cnt;
}