// Number.isFinite() Check if value is a normal finite number
console.log(Number.isFinite(24)) // ans: true
console.log(Number.isFinite(Infinity)) // ans: false 
console.log(Number.isFinite(NaN)) // ans: false 
console.log(Number.isFinite('220')) // ans: false 


// Number.isInteger() Check if value is integer
console.log(Number.isInteger(100)) // ans: true
console.log(Number.isInteger(100.4))  // ans: false 
console.log(Number.isInteger('100')) // ans: false 

// Number.isNaN() Check if value is exactly NaN
console.log(Number.isNaN(NaN)) // ans: true
console.log(Number.isNaN('Hello')) // ans: false
console.log(Number.isNaN(45)) // ans: false
console.log(isNaN('Hello')) // ans:true

//Number.isSafeInteger() Check if integer is within safe range
console.log(Number.isSafeInteger(555849038383803)) // ans: true
console.log(Number.isSafeInteger(55584903838380555)) // ans: false
console.log(Number.isSafeInteger(100)) // ans: true
console.log(Number.isSafeInteger(100.5)) // ans: false

// Number.parseFloat() 	Convert string to decimal number
console.log(Number.parseFloat('3.14')) // ans: 3.14
console.log(Number.parseFloat('3.456fe34')) // ans: 3.456
console.log(Number.parseFloat('3.fe34')) // ans: 3
console.log(Number.parseFloat('5b5.14')) // ans: 5
console.log(Number.parseFloat('abc10.5')) // ans: NaN

// Number.parseInt() Convert string to integer (with radix)
console.log(Number.parseInt('100')) // ans: 100
console.log(Number.parseFloat('abc10.5')) // ans: NaN
console.log(Number.parseInt('F', 16)) // ans: 15
console.log(Number.parseInt('0hF',16)) // ans: 0
console.log(Number.parseInt('10.5')) // ans: 10
console.log(Number.parseInt("Saiful")) // ans: NaN
console.log(Number.parseInt('abc')) // ans: NaN
console.log(Number.parseInt('14.4')) // ans: 14

// Number.EPSILON (property, but related) Smallest detectable difference
console.log(Number.EPSILON) // ans: 2.220446049250313e-16
// Use case: floating-point comparison
function almostEqual (a, b) {
    return Math.abs(a-b) <Number.EPSILON
}
console.log(almostEqual(0.8, 0.8)) // ans: true
console.log(almostEqual(0.4 + 0.4, 0.8)) // ans: true
console.log(almostEqual(0.3 + 0.3, 0.8)) // ans: false

//Number.MAX_SAFE_INTEGER (property)  Max safe integer
console.log(Number.MAX_SAFE_INTEGER) // ans: 9007199254740991
console.log(Number.isSafeInteger(4333776408487743322334)) // ans: false
console.log(Number.isSafeInteger(3434509988898888)) // ans: true


//Number.MAX_VALUE (property) Largest positive number JS can handle
console.log(Number.MAX_VALUE) // ans:  1.7976931348623157e+308
console.log(Number.MAX_VALUE * 2) // ans: Infinity

// Number.MIN_SAFE_INTEGER (property) Smallest safe integer in JavaScript (Minimum safe integer in JS)
console.log(Number.MIN_SAFE_INTEGER) // ans: -9007199254740991

// Number.MIN_VALUE (property) Smallest positive number JS can handle (above zero)
console.log(Number.MIN_VALUE) // ans: 5e-324
console.log(Number.MIN_VALUE / 10) // ans: 0

// Number.NaN (property) Not a Number (Represents “Not a Number” error value.)
console.log(Number.NaN) // ans: NaN
console.log('abc'/ 2) // ans: NaN)


// Number.POSITIVE_INFINITY (property) 	Positive infinity
console.log(Number.POSITIVE_INFINITY) // ans: Infinity
console.log(1 / 0) // ans: Infinity

// Number.NEGATIVE_INFINITY (property) Negative infinity
console.log(Number.NEGATIVE_INFINITY) // ans: -Infinity
console.log((-1 / 0)) // ans: -Infinity

// toExponential() Display numbers in scientific notation
const num = 1234.45;
console.log(num.toExponential()) // ans: 1.23445e+3
console.log(num.toExponential(2)) // ans: 1.23e+3
console.log(num.toExponential(6)) // ans: 1.234450e+3

// toFixed()  Format numbers with fixed decimal places (like money)
const price = 99.99;
console.log(price.toFixed(0)) // ans: 100
console.log(price.toFixed(2)) // ans: 99.99
console.log(price.toFixed(4)) // 99.9900

// toLocaleString() Show numbers formatted for different locales (thousands separator, currency).
let number = 1234567.89;
console.log(number.toLocaleString()) // ans: '1,234,567.89' (US English local)
console.log(number.toLocaleString('de-DE')) // ans: '1.234.567,89' (German local)

// toPrecision() Format number with specific total digits (precision
let per = 12.34567;
console.log(per.toPrecision()) // ans: 12.34567
console.log(per.toPrecision(4)) // ans: 12.35
console.log(per.toPrecision(2)) // ans: 12

// toString()  Convert number to string or change number base (binary, hex, etc).
const str = 255;
console.log(str.toString()) // ans: 255
console.log(str.toString(2)) // ans: 11111111
console.log(str.toString(16)) // ans: ff

// valueOf() Get the primitive number value from a Number object.
let vel = new Number(123)
console.log(typeof vel) // ans: object
console.log(vel.valueOf()) // ans: 123

let prim = 444;
let obj = new Number(444)
console.log(typeof prim) // ans: number
console.log(typeof obj) // ans: object