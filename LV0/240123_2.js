// 종이 자르기

function solution(M, N) {
    const xCut = M - 1;
    const yCut = (N - 1) * M;
    
    return xCut + yCut;
}