// 추억 점수

function solution(name, yearning, photo) {
    let answer = [];
    let currentPhoto = [];
    
    for (let pic of photo) {
        currentPhoto = pic;
        let totalYearning = 0;
        
        for(let i = 0; i < name.length; i++) {
            
            if(currentPhoto.includes(name[i])) {
                totalYearning += yearning[i];
            }
        }
        answer.push(totalYearning);
    }
    
    return answer;
}