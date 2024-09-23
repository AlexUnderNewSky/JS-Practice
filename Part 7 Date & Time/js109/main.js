/*



*/
"use strict";

const locales = [
  `en-US`, // USA
  `de-DE`, // Germany
  `uk-UA`, // Ukraine
  `bg-BG`, // Bulgaria
  `kk-KZ`, //Kazakhstan
  `zh-CN`, // China
  `ar`, // Arabic countries
  `hi-In`, // India
  `fr-FR`, // France
];

const date1 = new Date();
const options = {
  weekday: `long`,
  year: `numeric`,
  month: `long`,
  day: `numeric`,
};

const newDate1 = locales.map((el) =>
  new Intl.DateTimeFormat(el, options).format(date1)
);

console.log(newDate1.join(`\n`));

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const date2 = new Date();

const options2 = {
  hour: `2-digit`,
  minute: `2-digit`,
  second: `2-digit`,
};

const newDate2 = locales.map((el) =>
  new Intl.DateTimeFormat(el, options2).format(date2)
);

console.log(newDate2.join(`\n`));

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const date3 = new Date();

const options3 = {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
  hour: `2-digit`,
  minute: `2-digit`,
  second: `2-digit`,
};

const newDate3 = locales.map((el) =>
  new Intl.DateTimeFormat(el, options3).format(date3)
);

console.log(newDate3.join(`\n`));

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

function updateTime() {
  const currentDate = new Date();
  const options = {
    hour: `2-digit`,
    minute: `2-digit`,
    second: `2-digit`,
  };
  const timeFormat = new Intl.DateTimeFormat(`default`, options);

  const formatDateTime = timeFormat.format(currentDate);

  const timeDiv = document.querySelector(`.d1`);

  timeDiv.textContent = formatDateTime;
}

setInterval(updateTime, 1000);
