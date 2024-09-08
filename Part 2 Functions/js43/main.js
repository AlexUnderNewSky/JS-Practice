/*



*/

function calc(a, b, c) {
  return a(b, c);
}

const result = calc(
  function (x, y) {
    return x * y;
  },
  20,
  30
);