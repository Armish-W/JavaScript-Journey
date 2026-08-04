/* Types, difference on the basis of storage in memory and
 way to access 

1. Primitive,7, value copy is made, no memory refrence,
call by value
string, boolean, bigint, null, number, symbol, undefined

2. Non-primitive/ reference type
arrays, objects, functions

JavaScript is a dynamically typed language.
Because data type will be automatically
assigned at the time of compilation or code execution

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
       eg, 122334n

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 arrays:
 MyHobbies= ["art", "writing", "poetry"];

 let myobj=
 {
 age: 20,
 name: hania
 }

 const myFunc= printfunction ()
 {
 console.log("Hello World");
  }

Symbols:
*/
const Id= Symbol("123")
const aId= Symbol("123")
console.log(Id);
console.log(aId);
console.log(aId==Id);
let a= 123n
console.log(typeof a);

/*
memory

stack)primitive, gives copies
(so when copy is changed, original is safe as it is)
heap)non primitive, gives original memory reference
(so when assigned to another variable, its the original value
and chaning one value changes both, the original too)
*/

let myname= "emily"
let name= myname
name= "anna"
console.log(myname);
console.log(name);

let myuser= {
       name: "hitesh",
       age: 20
}

let hisuser= myuser
hisuser.age= 10
console.log(myuser);
console.log(hisuser);