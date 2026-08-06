const myArr = [0, 1, 2, 3, 4, 5]
// we can take different type of elements
// as well
// like true, "sara"
console.log(myArr[0]);
const players = ['ronaldo', 'messi','neymar']
const myArr2 = new Array(1,2,3,4)
// array methods
myArr.push(6)
myArr.push(10)
myArr.push(9)
myArr.pop()
console.log(myArr);
// push adds in array
// pop removes last element
myArr.unshift(0)
myArr.unshift(9)
myArr.shift()
myArr.shift()
myArr.shift()
// unshift adds in front
// shift removes from front
console.log(myArr.includes(2));
console.log(myArr.indexOf(0));
console.log(myArr.indexOf(1));
myArr.pop()
const newArr= myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
// slice, splice
console.log("A", myArr);
const mynew1 = myArr.slice(1,3)
// index 3 will not be included
console.log(mynew1);
console.log("B", myArr);
const mynew2 = myArr.splice(1,3)
// index 3 will be included
console.log(mynew2);
console.log("C", myArr);
// splice also removes selected elements from original array





