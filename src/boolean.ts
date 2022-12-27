/* Boolean in TypeScript is a primitive type. It can be either true or false. */
/* Example create variable boolean */
const isTrue = true;

const isFalse: boolean = false;

/* Check the type of boolean */
console.log(typeof isTrue); // boolean

console.log(isTrue);
console.log(isFalse);

/* Boolean Methods */
/* Boolean toFixed */
const booleanToFixed = isTrue.toString();
console.log(booleanToFixed);

/* if statement */
if (isTrue) {
    console.log('Hello World');
} else {
    console.log('Hello TypeScript');
}
