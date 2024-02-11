// 문자열 정렬하기 (1)

function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    
    for (let txt of my_string) {
        if(vowels.includes(txt)) {
            my_string = my_string.replaceAll(txt, "");
        }
    }
    
    return my_string;
}