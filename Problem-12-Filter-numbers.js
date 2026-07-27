// let arr = [1,2,10,5,50,600,200]

// let values = 29;
// let filter = []

// for(let i = 0;i<arr.length;i++){

//     if(arr[i]>values){
//         filter.push(arr[i])
//     }
// }

// console.log(filter)













function filterValue(arr, values){

    let filter = []

    for(let i = 0;i<arr.length; i++){
        if(values<arr[i]){
            filter.push(arr[i])
        }
    }
    return filter
}

let array = [1,2,10,5,50,600,200]
console.log(filterValue(array,28))