const college = {

    name: 'vnc',
    address: 'baily road',
    students: 800,
    events: ['21 feb', 'victory day'],
    people: {
        principal: {
            name: 'salim',
            age: 56
        }
    }
}

console.log(college.students);
console.log(college.people.principal.age);

college.events[2] = 'eid ul adha'

console.log(college.events)