// let str = 'DAD';
// let reverse = ''
// for(i = str.length-1; i>=0; i--){
//     console.log('i-->',i,str[i])

//     reverse+=str[i]
// }


// const result = console.log(reverse)

// if(reverse === str){
//     console.log('its a palindrome')
// }

// else{
//     console.log('its not a palindrome')
// }















function palinDrome(str){
    let reverse = ''

    for(let i = str.length-1; i>=0; i--){
        reverse += str[i]
    }


    if(reverse === str){
        console.log('Palindrome')
    }
    else{
        console.log('Not Palindrome')
    }
}

const string = 'dad'
palinDrome(string)