// 소수 만들기

// 소수 판별
function isPrime(num) {
    if(num === 1) {
        return false;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    
    return true;
}

function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
                    let sum = nums[i] + nums[j] + nums[k];
                    
                    if(isPrime(sum)) {
                        answer++;
                    }
                }
            }
        }
    }
    
    return answer;
}