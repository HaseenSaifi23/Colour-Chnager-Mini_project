// Method--1

// let btn = document.querySelector("button");
// let bodys = document.querySelector("body");
// let select = document.querySelector("h1");

// function color() {
//   btn.addEventListener("click", color);
//   let number = Math.floor(Math.random() * 16777215);
//   let random = "#" + number.toString(16);
//   bodys.style.backgroundColor = random;
//   select.innerHTML = random;
//   navigator.clipboard.writeText(random);
//   console.log(number, random);
// }

// color();

let btn = document.querySelector("button");
let bodys = document.querySelector("body");
let para = document.querySelector("p");

let select = document.querySelector("h1");

const color = () => {
  let number = Math.floor(Math.random() * 16777215);
  let random = "#" + number.toString(16);
  bodys.style.backgroundColor = random;
  select.innerText = random;
  navigator.clipboard.writeText(random);
  console.log(number, random);
};

btn.addEventListener("click", color);
color();
