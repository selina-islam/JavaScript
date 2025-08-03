// Number Data Type

// 1) Integer (Whole Number)

let age = 21;
console.log(age) // ans: 21
console.log(typeof age) // ans: number

// 2) Floating-point (Decimal Number)

let price = 99.99;
console.log(price) // ans: 99.99
console.log(typeof price) // number

// 3) Negative

let temp = -30;
console.log(temp)  // ans: -30
console.log(typeof temp)  // ans: number

// 4) Infinity (--- 25 / 0 ---)

// alert(25 / 0)
let division = 25/0
console.log(division)  // ans: Infinity
console.log(typeof division) // ans: number

// 5) NaN (Not a number) (--- 'Hello' / 2 ---)

let multiply = 'Selina'* 4
console.log(multiply)  // ans: NaN

console.log('abc' / 3)  // ans: NaN

let userData = '2000'
let result = userData + 4 
console.log(result)  // ans: 20004

let userDatas = 'Selina'
let results = userDatas + 4 
console.log(results)  // ans: Selina4

let Name = 'Sailful Islam'
console.log(Name / 2)  // ans: NaN


// 6) BigInt
// We can create BigInt by adding 'n' at the end of the number or by using the BigInt() function.

// Features---
// Safe for big integers → Does not exceed the Number limit.

// Only integers → Decimal numbers are not allowed.

// Cannot mix with normal numbers → Direct addition or subtraction with Number causes error.

let bigint= 43244456666666666666654534343434343434343n

console.log(9007199254740991 + 1); // ans: 9007199254740992  (right)
console.log(9007199254740991 + 2); // ans: 9007199254740992 (Wrong!)
// Even after adding +2, it shows the wrong number because it went beyond the safe limit.
console.log(9007199254740991n + 2n) // ans: 9007199254740993n (right)

// 'n' is the suffix used to create BigInt.
// JavaScript understands that this number is not a normal Number but a BigInt (large integer).

// rules
// 1) If the number is a decimal, BigInt does not support it.
// 2) For integers with very large numbers → use n.
// 3) For decimals or small numbers → use normal Number.

// Special numeric values

// Special numeric values mean unique numbers in JavaScript that represent conditions outside normal finite numbers—they’re not typical integers or floats but used for special mathematical states.
// In JavaScript, special numeric values mean some special types of numbers that are not like normal numbers. They are mainly used to represent mathematically infinite or impossible conditions.

// 1) Number.MAX_VALUE

// This value is the largest number representable in JavaScript. If you try to create a number larger than this, it will become Infinity.
// This value is the highest number in JavaScript. If you try to create a number larger than this, it will become Infinity.

console.log(Number.MAX_VALUE) // ans: 1.7976931348623157e+308

// 2) Number.MIN_VALUE

// This is the smallest positive number that can be accurately represented in JavaScript. Any number smaller than this will be treated as 0.
// This is the smallest positive number that can be accurately represented in JavaScript. Any number smaller than this will be treated as 0.

let tiny = Number.MIN_VALUE / 10;
console.log(tiny); // ans: 0
// If you divide Number.MIN_VALUE by 10, JavaScript cannot handle such a small number, so it shows it as 0.

console.log(Number.MIN_VALUE); // ans: 5e-324

// 3) Number.MAX_SAFE_INTEGER

// Number.MAX_SAFE_INTEGER → The largest integer that can be safely (accurately) represented in JavaScript.
// If you need a larger integer than this → use BigInt.
console.log(Number.MAX_SAFE_INTEGER);  // ans: 9007199254740991
//  9007199254740991 is the limit up to which JavaScript can accurately calculate integers.

// Number.EPSILON

// 1) Floating-point means small errors can occur.
// 2) EPSILON is the unit used to detect those tiny errors.
// 3) It’s mostly used when comparing decimal numbers.

console.log(0.1 + 0.2 === 0.3) // ans:  false

// We are adding 0.1 and 0.2, expecting the result to be 0.3. But in JavaScript, floating-point calculations have tiny errors, so comparing directly with `===` returns false.

console.log(0.1 + 0.2);   // ans: 0.30000000000000004  (slightly more)
// If you compare directly here, it will return false because the result of 0.1 + 0.2 is not exactly 0.3; there is a tiny error.
console.log(Number.EPSILON) // ans: 2.220446049250313e-16 (Extremely small value)
console.log(Math.abs((0.1 + 0.2) - 0.3));  // ans: 5.551115123125783e-17 (Smaller than EPSILON)

// When should you use Number.EPSILON? When you compare decimal (floating-point) numbers, don’t use direct === or ==. Because JavaScript has small errors in decimal addition and subtraction.
