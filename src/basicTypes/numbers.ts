/* Number in TypeScript
* 1. Number is a data type in TypeScript
* 2. Number is a numeric data type
* 3. Number is a primitive data type
* 4. Number is a non-nullable data type
* 5. Number is a floating point data type
* 6. Number is a 64-bit floating point data type
* 7. Number is a signed data type
* 8. Number is a decimal data type
* 9. Number is a double-precision 64-bit binary format IEEE 754 data type
* Example:
* Positive Number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
* Negative Number: -1, -2, -3, -4, -5, -6, -7, -8, -9, -10
* Decimal Number: 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10
*/

/* Number in TypeScript */
const numbers1: number = 10;
/* or like this */
const numbers2 = 3;
const numbers3 = 4.5;
const numbers4 = 5.5;
const number5 = -3;
const number6 = -4;

/* Check the type of number */
console.log(typeof numbers1); // number
console.log(typeof numbers3); // number
console.log(typeof number5); // number

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

/* Number Methods */
/* Number toFixed */
const numberToFixed = numbers1.toFixed(2);
console.log(numberToFixed);
