"use strict";
const firstNames = "Andrew";
const lastNames = "Smith";
const fullNames = firstNames + " " + lastNames;
const number = 6;
const number2 = 2;
const resultNumber = number + number2;
if (fullNames === "Andrew Smith") {
    console.log(resultNumber);
}
else {
    console.log("Hello World");
}
function addNumbers(number, number2, showResult, phrase) {
    const result = number + number2;
    if (showResult) {
        console.log(phrase + result);
        return result;
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number3 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
addNumbers(number1, number3, printResult, resultPhrase);
if (typeof number1 === "number") {
    console.log("number1 is number");
}
//# sourceMappingURL=if_statement.js.map