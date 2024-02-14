// 최댓값 만들기

function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    // 가장 큰 정수, 가장 작은 음수 곱한 값 중 큰 값 리턴
    return Math.max((numbers[0] * numbers[1]), (numbers[numbers.length - 1] * numbers[numbers.length - 2]));
}