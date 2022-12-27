const person: {
    name: string;
    age: number;
} = {
    name: 'John',
    age: 30,
}

console.log(person.name);

const student = {
    name: 'Dawu Merdeka',
    age: 30,
}

console.log(student.name);


/* Nested Object */
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

console.log(product.details.title);