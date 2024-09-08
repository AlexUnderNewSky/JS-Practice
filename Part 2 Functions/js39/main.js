/*



*/
// const a = `as2fgf2ads2sgD2SDG2SGS&^&*@*@%*^@726476219`;
// console.log(a.length);

// console.log(Math.floor(2));
// console.log(Math.ceil(2.2));

// console.log(Math.floor(Math.random() * 20));
function fn1(p) {
  const pass = `as2fgf2ads2sgD2SDG2SGS&^&*@*@%*^@726476219`;
  let password = "";

  for (let i = 0; i < p; i++) {
    const randomIndex = Math.floor(Math.random() * pass.length);
    password += pass[randomIndex];
    console.log(i);
  }
  return password;
}

const randomPassword = fn1(15);

//console.log(randomPassword);

console.log(fn1(10));

document
  .querySelector(".random-password")
  .addEventListener("click", function () {
    let inputPassValue = (document.querySelector(".pass-in").value = fn1(15));
    console.log(inputPassValue);
  });

document.querySelector(".send").addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  console.log(`Empty`);
});
