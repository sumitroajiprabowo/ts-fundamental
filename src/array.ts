const member = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
}

console.log(member.hobbies[0]);

/* Looping Array */
for (const hobby of member.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

/* Array Methods */
member.hobbies.push('Programming'); // Add to the end of array
member.hobbies[1] = 'Coding'; // Replace the element in array

console.log(member.hobbies);
