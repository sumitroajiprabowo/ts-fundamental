/* Function Return Types & void */
function add2(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult2(num: number): void {
    console.log('Result: ' + num);
}

printResult2(add2(5, 12));