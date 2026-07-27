// // Reverse a string and array


// // reverse an array
// let arr = [1,2,3,5]

// console.log(arr.reverse());

// // reverse a string (without function)

// let str = 'programming'
// let reversed = ''

// console.log(str[6])
// console.log('The length of this string:' ,str[str.length-3])


// for(let i = str.length-1; i>=0; i--){
//     console.log('i-->',i,str[i])
//     reversed = reversed+str[i]

// }

// console.log(reversed)











// with function

function reverseString(str){
    let reverse = '';

    for(let i = str.length-1; i>=0; i--){
        console.log('i-->',str[i])

        reverse+=str[i];
    }
    return reverse
}

let sentence = 'I love BD'


console.log(reverseString(sentence))