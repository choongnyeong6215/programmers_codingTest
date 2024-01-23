// 최소직사각형

function solution(sizes) {
    let x = [];
    let y = [];
    
    for(let i = 0; i < sizes.length; i++) {
        let maxX = Math.max(sizes[i][0], sizes[i][1]);
        let minY = Math.min(sizes[i][0], sizes[i][1]);
        
        x.push(maxX);
        y.push(minY);
        
    }
    return Math.max(...x) * Math.max(...y);
}