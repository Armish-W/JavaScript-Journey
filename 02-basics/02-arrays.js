const marvel = ['thor','ironman','spiderman']
const dc=['superman','batman']
// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][1]);

// const all = marvel.concat(dc)
// console.log(all);

// puch makes another array in array, 
// concat makes its content part of array

// const allHeros =[...marvel,...dc]
// console.log(allHeros);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr2 = arr1.flat(2)
console.log(arr2);

console.log(Array.isArray('sara'));
console.log(Array.from('sara'));
console.log(Array.from({name:'sara'}));
let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2,score3));