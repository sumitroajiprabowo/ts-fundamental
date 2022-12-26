function exampleNumberInference() {
    let x: number;
    x = 3;
    console.log(x); // 3
}

function exampleStringInference() {
    let x: string;
    x = "Hello World";
    x = "Hello TypeScript";
    console.log(x); // Hello World
}

exampleNumberInference();
exampleStringInference()

// Path: src/basic/boolean.ts
// Compare this snippet from src/basic/inference.ts:
// function exampleInference() {
//     let x = 3;
//     x = "hello"; // Error
// }

// Path: src/basic/boolean.ts
// Compare this snippet from src/basic/inference.ts:
// function exampleInference2() {
//     let x = 3;
//     x = "hello"; // Error
// }