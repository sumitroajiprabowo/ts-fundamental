/* Rest Parameter */
const addedNumber = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = addedNumber(5, 10, 2, 3.7);
console.log(addedNumbers);


/* Rest Parameter with array */
const addedNumber2 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers2 = addedNumber2(5, 10, 2, 3.7);
console.log(addedNumbers2);


/* Rest Parameter with array and string */
const addedNumber3 = (...numbers: [number, string, ...number[]]) => {
    return numbers.reduce((curResult, curValue) => {
        // @ts-ignore
        return curResult + curValue;
    }, 0);
}

const addedNumbers3 = addedNumber3(5, "10", 2, 3.7);
console.log(addedNumbers3);