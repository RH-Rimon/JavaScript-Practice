

function evenFromArray(arr){
    let even = []

for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }
}

console.log(even)

let sum = 0
for(let num of even){
    sum = sum + num
}

console.log(sum)
}

let array = [10,20,50,150,6,7,9,11,23]

evenFromArray(array)