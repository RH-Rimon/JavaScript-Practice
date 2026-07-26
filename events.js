const numbers = [12, 87, 15, 51,36,56];

const evens = []

for(const num of numbers){

    // console.log(num)

    

    if(num%2 === 0){

        console.log('even',num)
        evens.push(num)
    }
}
console.log(evens)


function getEvenNumbers(array){
    const evens = []

    for(const num of array){
        if(num % 2 === 0){
            evens.push(num)
        }
    }

    return evens
}

console.log(evens)