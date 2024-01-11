// 영어가 싫어요

function solution(numbers) {
    let numArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    numArr.map((v, idx) => {
        numbers = numbers.replaceAll(v, idx);
    })
    return Number(numbers);
}