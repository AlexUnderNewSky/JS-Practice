/*



*/
"use strict";

console.log(new Date());

const date = new Date();
console.log(date);

const date1 = new Date(2025, 3, 18);
console.log(date1);

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const date2 = new Date();

console.log(`Month: ${date2.getMonth()}`);

const hours = date2.getHours();
const minutes = date2.getMinutes();
const seconds = date2.getSeconds();
const milliseconds = date2.getMilliseconds();
console.log(`Time: ${hours}:${minutes}:${seconds}:${milliseconds}`);

const dayOfWeek = date2.getDay();
console.log(`DayNumber ${dayOfWeek}`);

console.log(`=-=-=-=-=-=-=-=-=-=-=-=`);

const date3 = new Date();

date3.setFullYear(2026);
date3.setMonth(11);
date3.setMinutes(59);
date3.setSeconds(59);

console.log(date3);
