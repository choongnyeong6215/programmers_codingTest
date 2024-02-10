// 최댓값 만들기(1)

function solution(numbers) {
    
    numbers.sort((a, b) => a - b);

    return numbers.pop() * numbers.pop();
}