/* let and const difference is that let can be reassigned, but const cannot be reassigned. */
/* example: */

// @ts-ignore
let firstName: string;
firstName = "Andrew";
const myAge = 30;

firstName = "Dawu";

console.log(firstName);
console.log(myAge);


function add(n1: number, n2: number) {
    let result;
    result = n1 + n2;
    return result;
}

console.log(add(5, 2));
// console.log(result); // error: result is not defined

let resultNumber2;
function addNumber2(n1: number, n2: number) {
    resultNumber2 = n1 + n2;
    return resultNumber2;
}

console.log(addNumber2(10, 2));
console.log(resultNumber2);