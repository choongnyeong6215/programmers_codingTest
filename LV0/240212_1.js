// 영어가 싫어요

function solution(numbers) {
    let alphabet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    alphabet.forEach((v, idx) => {
        numbers = numbers.replaceAll(v, idx);
    })
    
    return Number(numbers);
}