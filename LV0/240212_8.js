// 배열의 유사도

function solution(s1, s2) {
    let cnt = 0;
    
    s1.forEach((v) => {
        if (s2.includes(v)) {
            cnt++;
        }
    })
    
    return cnt;
}