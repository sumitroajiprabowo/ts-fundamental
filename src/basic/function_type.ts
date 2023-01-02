/* Function Types */
let combineValues: (a: number, b: number) => number;

combineValues = addMyNumber;
// combineValues = printResult;
console.log(combineValues(8, 8));

function addMyNumber(n1: number, n2: number) {
    return n1 + n2;
}