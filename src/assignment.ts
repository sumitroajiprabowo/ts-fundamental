function exampleAssignment() {
  let x = 3;
  let y = 4;
  x = y;
  console.log(x); // 4
  console.log(y); // 4
}

function exampleAssignment2() {
    let x = 3;
    let y = 4;
    x = y;
    y = 5;
    console.log(x); // 4
    console.log(y); // 5
}

console.log("Assignment");
exampleAssignment();

console.log("Assignment 2");
exampleAssignment2();