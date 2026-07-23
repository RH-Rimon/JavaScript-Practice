const numbers = [2,19,90,67,8,56]
for(const number of numbers){
    console.log(number)
}

const student = {
    name: 'akbar mogol',
    id: 111,
    age: 15,
    favSubject: ['math', 'physics'],
}

for(const key in student){

    // console.log(key);

    const value = student[key];
    console.log(key, value);
}