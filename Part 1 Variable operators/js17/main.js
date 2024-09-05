let num = 5;

console.log(7 % 2);

if (num > 0 && num % 2 === 0) {
  console.log(`Even`);
} else if (num > 0 && num % 2 !== 0) {
  console.log(`The number is positive and odd`);
} else if (num < 0 && num % 2 === 0) {
  console.log(`The number is negative and odd`);
} else {
  console.log(`You've made a mistake`);
}

let x;

console.log(x);

if (x) {
  console.log(`The variable x has the value`);
} else {
  console.log(`The variable x has no value`);
}

let score = 0;

document.querySelector(".btn").addEventListener("click", async () => {
  score++;
  document.querySelector("span").textContent = score;

  if (document.querySelector("span").textContent == "5") {
    document.querySelector("span").textContent = 5;
    await new Promise((resolve) => setTimeout(resolve, 0));
    score = 0;
    document.querySelector("span").textContent = 0;
    alert(`Value 5`);
  }
});
