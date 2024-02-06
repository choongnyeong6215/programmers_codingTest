// 푸드 파이트 대회

function solution(food) {
    let foodPlace = [];
    
    // 첫 번째 선수가 먹을 음식 배치 →
    for(let i = 1; i < food.length; i++) {
        foodPlace.push(i.toString().repeat(Math.floor(food[i] / 2)));
    }
    
    return foodPlace.join("") + "0" + [...foodPlace].reverse().join("");
}