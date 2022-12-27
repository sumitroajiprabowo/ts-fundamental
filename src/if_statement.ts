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
    } else {
        return result;
    }
}

let numberResult: number;
numberResult = addNumbers(9, 2.8, true, "Result is: ");

let numberResult2: number;
numberResult2 = addNumbers(5, 2.8, false, "Result is: ");
console.log(numberResult2);