function factorial(number){

    let result = 1;
    for(let i = number; i>=1; i--){

        console.log('i.-->',i)
        result = result*i;

    }
    return result;
}

console.log('5! = ',factorial(5))