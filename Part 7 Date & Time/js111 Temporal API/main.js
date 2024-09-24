"use strict";
const { Temporal } = require(`temporal-polyfill`);

// console.log(Temporal.Now.instant().toString());
// console.log(Temporal.Now.instant().toLocaleString());

// const dat = Temporal.PlainMonthDay.from({
//   month: 4,
//   day: 28,
// });

// console.log(dat.toString());

// console.log(`=-=-=-=-=-=-=-=-=-=`);

// const year = 2025;
// const month = 7;

// const date = new Temporal.PlainYearMonth(year, month);
// console.log(date.toString());

// const plainDate = new Temporal.PlainDate(2025, 7, 17);

// const year = plainDate.year;
// const month = plainDate.month;
// const day = plainDate.day;

// console.log(`Year: ${year},\nMonth: ${month},\nDay: ${day}`);

// const plainTime = new Temporal.PlainTime(12, 34, 19, 500);

// const hour = plainTime.hour;
// const minute = plainTime.minute;
// const second = plainTime.second;
// const millisecond = plainTime.millisecond;

// console.log(`${hour}h:${minute}m:${second}s:${millisecond}ms`);

// const plainDateTime = new Temporal.PlainDateTime(2024, 6, 15, 10, 12, 38);

// console.log(
//   `${plainDateTime.year}y,\n${plainDateTime.month}m,\n${plainDateTime.day}d,\n${plainDateTime.hour}h,\n${plainDateTime.minute}m,\n${plainDateTime.second}s`
// );

const now = Temporal.Now.instant();
console.log(now.toLocaleString());
