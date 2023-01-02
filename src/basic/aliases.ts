type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

console.log(car);



/* Type Aliases */
type Combinable = number | string; // Type Aliases
type ConversionDescriptor = 'as-number' | 'as-text'; // const combinedAges = combine(30, 26);

function combine2(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges2);

const combinedStringAges = combine2('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames2 = combine2('Dawu',  'Merdeka', 'as-text');
console.log(combinedNames2);