/* Literal Type */
function printStatusCode2(code: 404 | 200 | 201) {
    console.log(`My status code from literal type is ${code}.`)
}

printStatusCode2(200);