const num= new Number(49)
console.log(num);
console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toString().length);
const hundred= 1000000
console.log(hundred.toLocaleString());
// maths
console.log(Math);
console.log(Math.abs(-112));
console.log(Math.round(-112.5));
console.log(Math.ceil(112.1));
console.log(Math.floor(112.99));
console.log(Math.ceil(112.001));
console.log(Math.pow(2,3));
console.log(Math.min(-1,1,2));
console.log(Math.max(-1,1,2));
console.log(Math.random()); // value between 0 and 1
console.log((Math.random()*10)+1); // to prevent from getting value in 0s
console.log(Math.floor(Math.random()*10)+1);

const max= 20
const min = 10
console.log(Math.floor(Math.random()*(max-min+1)+min));