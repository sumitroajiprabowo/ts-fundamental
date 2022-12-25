/* Strings in TypeScript are surrounded by double quotes ("") or single quotes ('') */
/* Example create variable string */
const myName = "John Doe";

const firstName: string = "Andrew";
const lastName: string = "Smith";

/* Check the type of string */
console.log(typeof myName); // string

console.log(myName);

/* String Concatenation */
const fullName = firstName + " " + lastName;
console.log(fullName);

/* String Interpolation */
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

/* String Length */
const fullNameLength = fullName.length;
console.log(fullNameLength);

/* String Methods */
const fullNameUpperCase = fullName.toUpperCase();
console.log(fullNameUpperCase);

const fullNameLowerCase = fullName.toLowerCase();
console.log(fullNameLowerCase);

/* String Index */
const fullNameIndex = fullName[0];
console.log(fullNameIndex);

/* String Split */
const fullNameSplit = fullName.split(" ");
console.log(fullNameSplit);

/* String Replace */
const fullNameReplace = fullName.replace("John", "Andrew");
console.log(fullNameReplace);

/* String Substring */
const fullNameSubstring = fullName.substring(0, 5);
console.log(fullNameSubstring);

/* String Includes */
const fullNameIncludes = fullName.includes("John");
console.log(fullNameIncludes);

/* String Trim */
const fullNameTrim = fullName.trim();
console.log(fullNameTrim);

/* String Repeat */
const fullNameRepeat = fullName.repeat(3);
console.log(fullNameRepeat);

/* String CharAt */
const fullNameCharAt = fullName.charAt(0);
console.log(fullNameCharAt);

/* String CharCodeAt */
const fullNameCharCodeAt = fullName.charCodeAt(0);
console.log(fullNameCharCodeAt);