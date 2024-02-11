// 모음 제거

function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    
    for (let txt of my_string) {
        if(vowels.includes(txt)) {
            my_string = my_string.replaceAll(txt, "");
        }
    }
    
    return my_string;
}