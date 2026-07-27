function countVowelsFromString(str){

    let vowels = 'aeiou';
    let count = 0;

    for(letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++
        }
    }
    return count
}


let string = 'Programming Hero'

console.log(countVowelsFromString(string))