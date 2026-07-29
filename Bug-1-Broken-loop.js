// condition
// Return the sum of all numbers in the array

function sumArray(numbers){

    let total = 0;

    // for(let i = 0; i<=numbers.length; i++){
    //     total += numbers[i].toFixed(2);  //123.678956-->tofixed(2)-->123.67 
                                            // tofixed()--output string.. for int output should use Number()
    // }
    for(let i = 0; i<numbers.length; i++){
        total += Number(numbers[i].toFixed(2));  //123.678956-->tofixed(2)-->123.67 
    }

    return total;
}

let arr = [20, 30.99,89.78]
console.log(sumArray(arr))