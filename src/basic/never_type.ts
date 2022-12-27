/* Never Type */
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true) {}
}

const result = generateError('An error occurred!', 500);
console.log(result);