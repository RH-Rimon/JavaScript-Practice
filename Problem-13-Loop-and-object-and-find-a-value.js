// let monitor = {
//     color: 'Black',
//     brand: 'HP',
//     display: 'LED',
//     size: '15 inch',
// }

// console.log(monitor['color'])
// console.log(monitor.brand)


// //For in loop
// for(let key in monitor){
//     console.log(key, ':', monitor[key])
// }












const student = {

    name: 'RH Rimon',
    age: 25,
    university: 'PCIU',
    department: 'CSE'
}

function objOperation(obj){

    for(let key in obj){
        console.log(key)
    }
    for(let key in obj){
        console.log(obj[key])
    }
    for(let key in obj){
        console.log(key, ':', obj[key])
    }

    let objCount = Object.keys(obj)
    console.log(objCount)
    console.log("Total Properties:", objCount.length)

    let hasEmail = obj.hasOwnProperty('email')
    console.log("Has email:",hasEmail)
}

objOperation(student)