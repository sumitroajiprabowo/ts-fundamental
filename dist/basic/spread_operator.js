"use strict";
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));
const newNumbers = [...numbers];
console.log(newNumbers);
const hobbies = ["Coding", "Programming", "Reading"];
const activeHobbies = ["Sports", ...hobbies];
console.log(activeHobbies);
const person = {
    name: "Andrew",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const { name: userName, age } = person;
console.log(userName, age, person);
const userName2 = "Andrew";
const greeting = `This is a heading!
I'm ${userName2}.
This is cool!`;
console.log(greeting);
//# sourceMappingURL=spread_operator.js.map