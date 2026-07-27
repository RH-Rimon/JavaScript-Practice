// count values in a string

// let str = 'Programming Hero';

// for(let i = 0;i<str.length; i++){
//     console.log('i,   letter-->',i, str[i])
// }

function vowelCountFromString(str){

    let vowels ='aeiou'
    let count = 0;
    for(let letter in str){
    // console.log(letter,str[letter])
    for(let vowel in vowels){
        if(letter === vowel){
            count++
        }
    }
}

return count
}

let string = 'Programming Hero'

console.log(vowelCountFromString(string))

