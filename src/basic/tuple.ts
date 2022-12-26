const client: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string];
} = {
        name: 'John',
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        role: [2, 'author'],
};

/* Tuple */
client.role.push('admin');

console.log(client.role);

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);

// initialize incorrectly
// ourTuple = [5, false, 'Coding God was here', 'extra value'];


// Read Only Tuple
let ourReadOnlyTuple: readonly [number, boolean, string];

// initialize correctly
ourReadOnlyTuple = [5, false, 'Coding God was here'];
console.log(ourReadOnlyTuple);

// initialize incorrectly
// ourReadOnlyTuple = [5, false, 'Coding God was here', 'extra value'];


/* Named Tuple */
type NamedTuple = [number, boolean, string];

let ourNamedTuple: NamedTuple;

// initialize correctly
ourNamedTuple = [5, false, 'Coding God was here'];
console.log(ourNamedTuple);

// initialize incorrectly
// ourNamedTuple = [5, false, 'Coding God was here', 'extra value'];


/* Destructuring Tuples */
let [a, b, c] = ourTuple;
console.log(a, b, c);
