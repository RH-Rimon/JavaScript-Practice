// let arr = [1,2,3,5]

// console.log(arr.length)



function gnereateAverg(arr){
    let sum = 0
    for(let i=0; i<arr.length;i++){
    sum = sum+arr[i]

    // console.log(arr[i])
    
}

let averg = sum/arr.length
console.log("Sum is:",sum)
console.log("Average is:",averg)


}

let arr = [1,2,3,5]

console.log(gnereateAverg(arr))