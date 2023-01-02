"use strict";
let numbers1 = 10;
let numbers2 = 3;
let numbers3 = 4.5;
let numbers4 = 5.5;
let number5 = -3;
let number6 = -4;
console.log(typeof numbers1);
console.log(typeof numbers3);
console.log(typeof number5);
function addNumber() {
    return numbers1 + numbers2;
}
function subtractionNumber() {
    return numbers4 - numbers3;
}
function multiplicationNumber() {
    return number5 * number6;
}
function divisionNumber() {
    return numbers4 / numbers2;
}
console.log(addNumber());
console.log(subtractionNumber());
console.log(multiplicationNumber());
console.log(divisionNumber());
const numberToFixed = numbers1.toFixed(2);
console.log(numberToFixed);
//# sourceMappingURL=number.js.map