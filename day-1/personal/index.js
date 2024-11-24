// const firstName = 'Balqis';
// const lastName = 'Adila';

// // template string by using backtick
// const greeting = `Hello, my name is ${firstName} ${lastName}!`;

// console.log(greeting);

// const animals = [
//   "🐶",
//   "🐱",
//   "🐭",
//   "🐹",
//   "🐰",
//   "🦊",
//   "🐻",
//   "🐼",
//   "🐨",
//   "🐯",
//   "🦁",
//   "🐮",
//   "🐷",
//   "🐸",
//   "🐙",
//   "🐵",
//   "🦄",
// ];

// for (let i = 0; i < animals.length; i++) {
//     const sentence = `The animal at index ${i} is ${animals[i]}`;
//     console.log(sentence)
// }

// MODULE LESSON START HERE

// best practice to require modules at the top of the file
const m = require("./math.js");
const t = require("./time.js");

console.log("TIME MOUDLE")
console.log(t.time);
console.log(t.hours);
console.log(t.minutes);
console.log(t.seconds);
console.log(t.day);
console.log(t.month);

const a = m.add(5, 3);
const b = m.subtract(5, 13);
const c = m.multiply(5, 3.5);

const d = m.add(12, 56)
const e = m.subtract(53, 45)
const f = m.multiply(5, 8)

console.log("MATH MODULE")
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
