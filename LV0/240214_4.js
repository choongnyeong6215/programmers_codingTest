// 다항식 더하기

function solution(polynomial) {
    let polyArr = polynomial.split(" + ");
    
    let isX = 0;    // x 존재 요소
    let isNX = 0;   // x 존재하지 않는 요소
    
    polyArr.forEach((v) => {
        // x 존재하는 경우
        if (v.includes("x")) {
            const num = v.split("x")[0];
            
            // 계수 1인 경우
            if (num === "") {
                isX += 1;
            }
            else {
                isX += Number(num);
            }
        }
        
        // x 존재하지 않는 경우
        else {
            isNX += Number(v);
        }
    })
    
    // 존재 유무 판단
    if (isX === 0 && isNX === 0) {
        return "0";
    }
    
    if (isX === 0 && isNX !== 0) {
        return `${isNX}`;
    }
    
    if (isX !== 0 && isNX === 0) {
        if (isX == 1) {
            return `x`;
        }
        
        return `${isX}x`;
    }
    
    if (isX !== 0 && isNX !== 0) {
        if (isX === 1) {
            return `x + ${isNX}`;
        }
        
        return `${isX}x + ${isNX}`;
    }
}