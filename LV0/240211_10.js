// 369 게임

function solution(order) {
    
    return order.toString().split("").filter((v) => v.includes("3") ||  v.includes("6") || v.includes("9")).length;
}