/* Function Types */
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));

function add(n1: number, n2: number) {
    return n1 + n2;
}