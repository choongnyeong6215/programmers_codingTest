// 주사위의 개수

function solution(box, n) {
    let x = box[0];
    let y = box[1];
    let h = box[2];
    
    return Math.floor(x / n) * Math.floor(y / n) * Math.floor(h / n);
}