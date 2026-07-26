function chowduriFy(name){
    const fullName = name + 'Chowdhury';
    return fullName;
}

const robinChow = chowduriFy('Robin ');
console.log(robinChow);

function fullName (firstName, lastName){
    const fullName = firstName + ' ' + lastName;

    return fullName;

}

const mohabbat = fullName('Mohabbat','Ali');
console.log(mohabbat)

function doubleOrHalf(price, isDouble){

    if(isDouble === true){
        const askingPrice = price*2;
        return  askingPrice;
    }
    else{
        askingPrice = price/2
        return askingPrice
     }
}

const MyPrice = doubleOrHalf(100, true)

console.log('price for mango people', MyPrice)
const leaderPrice = doubleOrHalf(100, false)

console.log('price for Leader', leaderPrice)



function firstElementDouble(array){
    console.log('got the parameter value', array)

    const firstElement = array[0]

    const doubled = firstElement * 2
    return doubled
}
const numbers = [78,90,76,35,567]
const doubled = firstElementDouble(numbers)

console.log('double of the first element', doubled)





const student = {
    name: 'Monir Abdul',
    id: 15,
    marks: 75
}


function isStudentAPlus(student){
    console.log('got the student', student)

    const marks = student.marks
    console.log('student marks:',marks)

    if(marks>=80){
        console.log('student Got A+')
        return true;
    }

    else{
        console.log('student didnt obtain A+')
    }
}

isStudentAPlus(student)
