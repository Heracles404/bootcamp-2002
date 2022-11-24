// Method 1
const math = require('./math');
console.log(math.PI)
console.log(math.square(9))

// Method 2
const { PI, square } = require('./math');
console.log(PI)
console.log(square(9))
