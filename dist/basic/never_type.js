"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('An error occurred!', 500);
console.log(result);
//# sourceMappingURL=never_type.js.map