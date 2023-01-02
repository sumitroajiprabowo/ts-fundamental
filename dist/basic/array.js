"use strict";
const member = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
};
console.log(member.hobbies[0]);
for (const hobby of member.hobbies) {
    console.log(hobby.toUpperCase());
}
member.hobbies.push('Programming');
member.hobbies[1] = 'Coding';
console.log(member.hobbies);
//# sourceMappingURL=array.js.map