// 최빈값 구하기

function solution(array) {
    let frequentMap = new Map();
    
    if (array.length === 1) {
        return array[0]
    }
    
    // map 초기화
    for (let i = 0; i <= Math.max(...array); i++) {
        frequentMap.set(i, 0);
    }
    
    // 빈도수 체크
    for (let i = 0; i < array.length; i++) {
        frequentMap.set(array[i], frequentMap.get(array[i]) + 1);
    }
    
    let frequentArr = Array.from(frequentMap.values());
    let mostFrequentNum = Math.max(...frequentArr);
    
    // 최빈값 중복 체크
    if (frequentArr.indexOf(mostFrequentNum) === frequentArr.lastIndexOf(mostFrequentNum)) {
        return frequentArr.indexOf(mostFrequentNum);
    }
    else {
        return -1;
    }
    
}