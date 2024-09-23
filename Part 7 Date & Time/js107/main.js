/*



*/
"use strict";

const number = 123456.78;

const bg = new Intl.NumberFormat(`bg-BG`).format(number);
const usa = new Intl.NumberFormat(`en-US`).format(number);
const ukr = new Intl.NumberFormat(`uk-UA`).format(number);
const ger = new Intl.NumberFormat(`de-DE`).format(number);
const austria = new Intl.NumberFormat(`de-AT`).format(number);

console.log(`Bulgaria ${bg}`);
console.log(`USA ${usa}`);
console.log(`Ukraine ${ukr}`);
console.log(`Germany ${ger}`);
console.log(`Austria ${austria}`);

const locales = [
  `en-US`, // USA
  `de-DE`, // Germany
  `uk-UA`, // Ukraine
  `kk-KZ`, //Kazakhstan
  `zh-CN`, // China
  `ar`, // Arabic
  `hi-In`, // India
  `fr-FR`, // France
];
