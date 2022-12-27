const firstNames: string = "Andrew";
const lastNames: string = "Smith";
const fullNames: string = firstNames + " " + lastNames;
const number: number = 6;
const number2: number = 2;
const resultNumber: number = number + number2;

/* if statement */
if (fullNames === "Andrew Smith") {
    console.log(resultNumber);
} else {
    console.log("Hello World");
}

function addNumbers(number: number, number2: number, showResult: boolean, phrase: string) {
    const result = number + number2;
    if (showResult) {
        console.log(phrase + result);
        return result;
    } else {
        return result;
    }
}

let number1: number;
number1 = 5;
const number3 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

addNumbers(number1, number3, printResult, resultPhrase);

if (typeof number1 === "number") {
    console.log("number1 is number");
}