// EXERCITIUL 1 Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0
// Input: [-2.398]
// Output: -2.398

let arrayNumbers = [];

const arrayFunction = (arrayNumbers) => {
  let sum = 0;

  for (let i=0; i< arrayNumbers.length;i++) {
     sum += arrayNumbers[i];
  }
  return sum
};

console.log(arrayFunction([1, 5.2, 4, 0, -1]))

// EXERCITIUL 2
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Please use the following function names:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// subtraction = subt
// Note: All math operations will be: a (operation) b

const add = (numarUnu, numarDoi) => {
  return numarUnu + numarDoi;
};

const multiply = (numarUnu, numarDoi) => {
  return numarUnu * numarDoi;
};

const divide = (numarUnu, numarDoi) => {
  return numarUnu / numarDoi;
};

const mod = (numarUnu, numarDoi) => {
  return numarUnu % numarDoi;
};

const subtraction = (numarUnu, numarDoi) => {
  return numarUnu - numarDoi;
};

console.log(add(2,3));
console.log(multiply(2,2));
console.log(divide(6,3));
console.log(mod(4,2));
console.log(subtraction(7,4));


// EXERCITIUL 3
// A variation of determining leap years, assuming only integers are used and years can be negative and positive.
// Write a function which will return the days in the year and the year entered in a string. For example:
// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
// Also the basic rule for validating a leap year are as follows
// Most years that can be divided evenly by 4 are leap years.
// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days

const yearDays = (year) => {
  const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (leapYear) {
    return `${year} has 366 days`;
  } else {
    return `${year} has 365 days`;
  }
 };