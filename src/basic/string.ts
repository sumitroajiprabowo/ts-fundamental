/* Strings in TypeScript are surrounded by double quotes ("") or single quotes ('') */
/* Example create variable string */

/* Implicit Type */
let myName = "John Doe";

/*Explicit Type */
let firstMyName: string = "Andrew";
let lastMyName: string = "Smith";

/* Check the type of string */
console.log(typeof myName); // string

console.log(myName);

/* String Concatenation */
let fullName = firstMyName + " " + lastMyName;
console.log(fullName);

/* String Interpolation */
let fullName2 = `${firstMyName} ${lastMyName}`;
console.log(fullName2);

/* String Length */
let fullNameLength = fullName.length;
console.log(fullNameLength);

/* String Methods */
let fullNameUpperCase = fullName.toUpperCase();
console.log(fullNameUpperCase);

let fullNameLowerCase = fullName.toLowerCase();
console.log(fullNameLowerCase);

/* String Index */
let fullNameIndex = fullName[0];
console.log(fullNameIndex);

/* String Split */
let fullNameSplit = fullName.split(" ");
console.log(fullNameSplit);

/* String Replace */
let fullNameReplace = fullName.replace("John", "Andrew");
console.log(fullNameReplace);

/* String Substring */
let fullNameSubstring = fullName.substring(0, 5);
console.log(fullNameSubstring);

/* String Includes */
let fullNameIncludes = fullName.includes("John");
console.log(fullNameIncludes);

/* String Trim */
let fullNameTrim = fullName.trim();
console.log(fullNameTrim);

/* String Repeat */
let fullNameRepeat = fullName.repeat(3);
console.log(fullNameRepeat);

/* String CharAt */
let fullNameCharAt = fullName.charAt(0);
console.log(fullNameCharAt);

/* String CharCodeAt */
let fullNameCharCodeAt = fullName.charCodeAt(0);
console.log(fullNameCharCodeAt);