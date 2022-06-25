const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.square = square;
exports.PI = PI;

// =========================
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


//  Limitation


// module.exports = { a: 'A' };
// exports.b = 'B';
// console.log(exports === module.exports);
// console.log(module)

