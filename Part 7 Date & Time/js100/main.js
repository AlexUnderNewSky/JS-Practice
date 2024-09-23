/*



*/
"use strict";

const date = new Date();

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString("en-US"));
// console.log(date.toLocaleDateString("zh-CN"));

console.log(
  `${date.toLocaleDateString(`en-UK`, {
    weekday: `long`,
    year: `numeric`,
    month: `long`,
    day: `numeric`,
    hour: `2-digit`,
    minute: `2-digit`,
    second: `2-digit`,
    timeZoneName: `short`,
  })}.`
);
