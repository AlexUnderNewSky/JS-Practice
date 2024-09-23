/*



*/
"use strict";

// const date = new Date();

// date.setDate(date.getDate() + 9);
// date.setMonth(date.getMonth() - 3);

// console.log(date);

const date = new Date();
console.log(date);

const date1 = date.toISOString().slice(0, 10);
console.log(date1);

const date2 = date1.toString();
console.log(date2);
