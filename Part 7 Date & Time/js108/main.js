/*



*/
"use strict";

const number1 = 1234567.89;

const locales = [
  `en-US`, // USA
  `de-DE`, // Germany
  `uk-UA`, // Ukraine
  `kk-KZ`, //Kazakhstan
  `zh-CN`, // China
  `ar`, // Arabic countries
  `hi-In`, // India
  `fr-FR`, // France
];

const format1 = locales.map((el) => new Intl.NumberFormat(el).format(number1));

console.log(format1.join(`\n`));

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const number2 = 0.12345;

const format2 = locales.map((item) =>
  new Intl.NumberFormat(item, {
    style: `percent`,
    minimumFractionDigits: `2`,
  }).format(number2)
);

console.log(format2.join(`\n`));

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const money = 222.35;

const format3 = locales.map((el) =>
  new Intl.NumberFormat(el, {
    style: `currency`,
    currency: `USD`,
  }).format(money)
);

console.log(format3.join(`\n`));

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const date = new Date();

console.log(date);

const newDate = locales.map(function (item) {
  return Intl.DateTimeFormat(item).format(date);
});

console.log(newDate.join(`\n`));
