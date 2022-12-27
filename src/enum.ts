enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const personMember = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(personMember.role);

enum cardinalDirections {
    North,
    East,
    South,
    West
}
let direction = cardinalDirections.East;
console.log(direction);

enum numericEnum {
    One = 9,
    Two= 11,
    Three=14,
}

console.log(numericEnum.One);
console.log(numericEnum.Two);
console.log(numericEnum.Three);

enum stringEnum {
    One = 'One',
    Two = 'Two',
    Three = 'Three',
}

console.log(stringEnum.One);
console.log(stringEnum.Two);
console.log(stringEnum.Three);