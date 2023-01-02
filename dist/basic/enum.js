"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const personMember = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(personMember.role);
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 0] = "North";
    cardinalDirections[cardinalDirections["East"] = 1] = "East";
    cardinalDirections[cardinalDirections["South"] = 2] = "South";
    cardinalDirections[cardinalDirections["West"] = 3] = "West";
})(cardinalDirections || (cardinalDirections = {}));
let direction = cardinalDirections.East;
console.log(direction);
var numericEnum;
(function (numericEnum) {
    numericEnum[numericEnum["One"] = 9] = "One";
    numericEnum[numericEnum["Two"] = 11] = "Two";
    numericEnum[numericEnum["Three"] = 14] = "Three";
})(numericEnum || (numericEnum = {}));
console.log(numericEnum.One);
console.log(numericEnum.Two);
console.log(numericEnum.Three);
var stringEnum;
(function (stringEnum) {
    stringEnum["One"] = "One";
    stringEnum["Two"] = "Two";
    stringEnum["Three"] = "Three";
})(stringEnum || (stringEnum = {}));
console.log(stringEnum.One);
console.log(stringEnum.Two);
console.log(stringEnum.Three);
//# sourceMappingURL=enum.js.map