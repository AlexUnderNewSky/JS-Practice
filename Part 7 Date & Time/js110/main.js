"use strict";

// const a1 = new Date();

// console.log(a1);
// console.log(a1.getUTCHours());
// console.log(a1.getUTCMonth());

// const utcDate = new Date(Date.UTC(2024, 3, 23, 12, 30, 0));

// const utcCopy = utcDate.toUTCString();
// console.log(utcCopy);

// console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=`);

// const b2 = new Date();
// const b3 = new Intl.DateTimeFormat(`en-UK`, {
//   year: `numeric`,
//   month: `long`,
//   day: `numeric`,
// }).format(b2);

// console.log(b2);
// console.log(b3);

const { Temporal } = require(`temporal-polyfill`);

console.log(Temporal.Now.instant().toString());
console.log(Temporal.Now.instant().toLocaleString());
