// 가까운 수

function solution(array, n) {
    let dist = Number.MAX_SAFE_INTEGER;
    let nearestNum = 0;
    
    array.sort((a, b) => a - b);
    
    for (let num of array) {
        let numDist = Math.abs(n - num);
        
        if (numDist < dist) {
            dist = numDist;
            nearestNum = num;
        }
    }
    
    return nearestNum;
}