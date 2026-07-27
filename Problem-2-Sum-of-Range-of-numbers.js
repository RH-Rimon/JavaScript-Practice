function sumRange(number){

    let sum = 0;
    for(let i = 1; i<=number; i++){
        console.log('i-->',i)
        sum = sum+i

    }
    return sum;

}

console.log('Sum is:' , sumRange(5))