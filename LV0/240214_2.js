// 캐릭터의 좌표

function solution(keyinput, board) {
    let player = Array.from({length : board.length}, () => 0);
    let boundary = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    for (let pos of keyinput) {
        
        // x좌표 벗어난 경우
        if (player[0] > boundary[0]) {
            break;
        }
        
        if (pos === "left") {
            if (player[0] > -boundary[0]) player[0]--;
        }
        else if (pos === "right") {
            if (player[0] < boundary[0]) player[0]++;
        }
        
        // y좌표 벗어난 경우
        if (player[1] > boundary[1]) {
            break;
        }
        
        else if (pos === "up") {
            if (player[1] < boundary[1]) player[1]++;
        }
        else if (pos === "down") {
            if (player[1] > -boundary[1]) player[1]--;
        }
    }
    
    return player;
}