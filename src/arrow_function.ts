/* Arrow Function */
let log = function(message:string) {
    console.log(message);
}

let doLog = (message:string) => console.log(message);

doLog("Hello TypeScript");

/* Arrow Function with parameter */
let doLog2 = (message:string) => console.log(message);

doLog2("Hello World");

/* Arrow Function with parameter and return type */
let doLog3 = (message:string) => console.log(message);

doLog3("Hello Arrow Function");