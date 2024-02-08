// // 2중 for문으로 해결
// function solution(emergency) {
//     let answer = Array.from({length : emergency.length}, (v) => 1);
    
//     for(let i = 0; i < emergency.length; i++) {
//         for(let j = 0; j < emergency.length; j++) {
//             if(emergency[i] < emergency[j]) {
//                 answer[i]++;
//             }
//         }
//     }
    
//     return answer;
// }


// // 정렬로 해결
function solution(emergency) {
    let sorted_emergency = [...emergency].sort((a, b) => b - a);
    
    return emergency.map((v) => sorted_emergency.indexOf(v) + 1);
}