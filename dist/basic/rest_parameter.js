"use strict";
const addedNumber = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addedNumber(5, 10, 2, 3.7);
console.log(addedNumbers);
const addedNumber2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers2 = addedNumber2(5, 10, 2, 3.7);
console.log(addedNumbers2);
const addedNumber3 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers3 = addedNumber3(5, "10", 2, 3.7);
console.log(addedNumbers3);
//# sourceMappingURL=rest_parameter.js.map