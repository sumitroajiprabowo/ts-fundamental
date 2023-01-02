"use strict";
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);
function combine2(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges2);
const combinedStringAges = combine2('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames2 = combine2('Dawu', 'Merdeka', 'as-text');
console.log(combinedNames2);
//# sourceMappingURL=aliases.js.map