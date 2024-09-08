/*



*/

const myCall = () => {
  console.log(`The callback function was called`);
};

const fn30 = function (callback) {
  console.log(`Perform action .............`);
  callback();
};

fn30(myCall);

console.log(`==============`);

function testFN(city, country, callback) {
  if (callback && typeof callback === "function") {
    callback();
  } else {
    console.log(`The city ${city} - country ${country}`);
  }
}

testFN(`London`, `UnitedKingdom`, function () {console.log(`Function is done well`);});

console.log(`===============`);

const arr = [1, 2, 3, 4];

console.log(arr.forEach((el) => console.log(el * 2)));
console.log(arr.map((el) => el + 10));
console.log(arr.filter((el) => el > 3));

console.log(arr.join(', '));
