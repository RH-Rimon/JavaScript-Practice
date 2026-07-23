const person = {

    name: "Mobarak Ali",
    profession: 'student',
    age: 21,
    isSingle: true
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

delete person.isSingle;

delete person.profession;
console.log(person)