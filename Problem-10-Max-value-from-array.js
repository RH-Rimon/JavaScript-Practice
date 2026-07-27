// let arr = [500,50,20,30,125,1000]
// let largest = arr[0];

// for(let i = 1; i<arr.length; i++){

//     // console.log(arr[i])
//     let currentElement = arr[i]

//     if(currentElement>= largest){
//         largest = currentElement
//     }


// }

// console.log("Max Value:",largest)










function maxValue(arr){
    let largest = arr [0]
    for(let i = 0;i<=arr.length;i++){
        let currentElement = arr[i]

        if(currentElement>= largest){
            largest = currentElement
        }
    }
    // console.log(largest)
    return largest
}

let array = [500,50,20,30,125,1000];
console.log("Max Value:", maxValue(array))
