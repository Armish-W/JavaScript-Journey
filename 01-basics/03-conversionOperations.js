let score = "13"

//Numeric String originally
console.log(typeof score);
console.log(typeof (score));

// Converted to Number
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Converted to Boolean
valueInNumber = Boolean(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Alpha numeric String originally
score= "1abc"
// Converted to Number
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
NaN - not a number

When string is converted to number and it is not a valid number,
it will return NaN
In case of null, Number converion will result in 0
In case of undefined, Number converion will result in NaN
In case of true, Number converion will result in 1
In case of false, Number converion will result in 0
eg "33"= 33

In case of Boolean, empty string will result in false
and non-empty string will result in true

*/
