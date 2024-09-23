/*



*/
"use strict";

const date = new Date();

console.log(date.toLocaleDateString());

console.log(
  date.toLocaleString(`en-US`, {
    weekday: `long`,
    year: `numeric`,
    day: `numeric`,
    hour: `2-digit`,
    minute: `2-digit`,
    second: `2-digit`,
  })
);
