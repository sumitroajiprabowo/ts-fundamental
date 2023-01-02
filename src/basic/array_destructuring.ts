const myHobbies = ["Coding", "Programming", "Reading"];

/* Array Destructuring */
const [hobby1, hobby2, hobby3] = myHobbies;
console.log(hobby1, hobby2, hobby3);

/* Array Destructuring with Rest Operator */
const [hobby4, hobby5, ...remainingHobbies] = myHobbies;
console.log(hobby4, hobby5, remainingHobbies);
