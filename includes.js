const numbers = [23, 89, 90,91];
const numbers2 = [2,3];
const players = ['babul', 'kabul', 'cabul'];


const allNumbers = numbers.concat(numbers2);

console.log(allNumbers);
// console.log(numbers.includes(23));

const hasFound = numbers.includes(90);

console.log(hasFound);

if(players.includes('babul')){
    console.log('Babul is here');
}