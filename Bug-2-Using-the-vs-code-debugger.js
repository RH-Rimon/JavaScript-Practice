function findAverage(numbers){

    let total = 0;

    for(let i = 0; i <= numbers.length; i++){
        total += number[i];
    }

    let average = total/numbers.length - 1;
    return average
}

console.log(findAverage([10, 20, 30]))