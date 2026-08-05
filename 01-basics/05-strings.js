const name = "nora-ali"
const repoCount = 50
console.log
(`Hello, my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('nora')
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('a'));

// 2 not included
const a= gameName.substring(0,2);
console.log(a);
const b= gameName.slice(0,2);
console.log(b);
const user= "  nora   "
console.log(user);
console.log(user.trim()); //removes spaces
console.log(user.replace('a','o'));
console.log(user.includes('a'));
console.log(name.split('-'));