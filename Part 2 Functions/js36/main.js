/*



*/

// function count() {
//   console.log(arguments);
// }

// count();

function fn25() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(fn25(5, 5, 5, 20, 100));

function rs(...rest) {
  const ar = rest.reduce((acc, val) => acc + val);
  return ar;
}

console.log(rs(20, 100, 500));
