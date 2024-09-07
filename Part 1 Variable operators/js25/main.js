// // let a = 10;

// // do {
// //   console.log(2);
// // } while (a > 10);

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

let num = 0;

do {
  num++;
  if (num === 3) {
    continue
  }
  console.log(num);
} while (num < 5);


let count = 0;

do {
  console.log(`${count} <---`);
  count++;
  if (count === 5) {
    break
  }
} while (true);