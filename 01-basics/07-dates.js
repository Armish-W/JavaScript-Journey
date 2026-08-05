let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

// let date1 = new Date(2026, 8, 5,3,50) // 0 to 11 months
let date1 = new Date("01-05-2026")
console.log(date1);
console.log(date1.toLocaleString());
let myTime = Date.now()
console.log(myTime);
console.log(date1.getTime());
(console.log(date1.getTime())) - (console.log(myTime));