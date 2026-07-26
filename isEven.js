function isEven(number){
    console.log(number%2)

    if(number % 2 === 0){
        // console.log('Even Number')

        return true;
    }
    else{
        // console.log('odd')

        return false;
    }
}

const result = isEven(85)
console.log('is even:', result);