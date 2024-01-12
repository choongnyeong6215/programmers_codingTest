// 구슬을 나누는 경우의 수

function solution(balls, share) {
    let answer = 1;
    
    while(share) {
        answer *= balls / share;
        balls--;
        share--;
    }
    return Math.round(answer);
}