/* Default Function */
const exampleAddNumber= (n1: number, n2: number) => n1 + n2;

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(exampleAddNumber(5, 2));

/* Default Function with parameter */
function exampleLog2(message: string, message2: string = "Hello World") {
    console.log(message);
    console.log(message2);
}

exampleLog2("Hello TypeScript");

/* Default Function with parameter and return type */
function exampleLog3(m1: string, m2: string = "Hello World"): void {
    console.log(m1);
    console.log(m2);
}

exampleLog3("Hello TypeScript");