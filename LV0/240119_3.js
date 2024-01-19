// 캐릭터의 좌표

function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    // 경계선
    let boundary = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    for(let pos of keyinput) {
        // x축이 경계선보다 큰 경우
        if(x > boundary[0]) break;
        
        if(pos === "left") {
            if(x > -boundary[0]) {
                x--;
            }
        }
        if(pos === "right") {
            if(x < boundary[0]) {
                x++;
            }
        }
        
        // y축이 경계선보다 큰 경우
        if(y > boundary[1]) break;
        
        if(pos === "down") {
            if(y > -boundary[1]) {
                y--;
            }
        }
        if(pos === "up") {
            if(y < boundary[1]) {
                y++;
            }
        }
    }
    return [x, y];
}