const numbers = [12, 7, 8, 10,98]

// let sum = 0;

// for(const num of numbers){
//     sum = sum + num;
//     console.log(num, sum)
// }

// console.log("sum is", sum)


// const odds = [23,15,71,29,97]

// let sumOdds = 0

// for(const numOdd of odds){
//     sumOdds = sumOdds+numOdd

// }
// console.log('Sum of odd numbers', sumOdds)













function sumOfArray(array){
    console.log('Inside the function', array)

    let sum = 0
    for(const number of array){
        sum = sum + number;
        
    }
    return sum
}

const result = sumOfArray(numbers)

console.log(result)