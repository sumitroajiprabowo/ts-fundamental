"use strict";
const client = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
client.role.push('admin');
console.log(client.role);
let ourTuple;
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
let ourReadOnlyTuple;
ourReadOnlyTuple = [5, false, 'Coding God was here'];
console.log(ourReadOnlyTuple);
let ourNamedTuple;
ourNamedTuple = [5, false, 'Coding God was here'];
console.log(ourNamedTuple);
let [a, b, c] = ourTuple;
console.log(a, b, c);
//# sourceMappingURL=tuple.js.map