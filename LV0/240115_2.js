// 가까운 수

function solution(array, n) {
    let dist = Number.MAX_SAFE_INTEGER;
    let nearNum = 0;
    let arr = array.sort((a,b) => a -b);
    
    for(let num of arr) {
        let absDist = Math.abs(num - n);
        
        if(absDist < dist) {
            dist = absDist;
            nearNum = num;
        }
    }
    return nearNum;
}