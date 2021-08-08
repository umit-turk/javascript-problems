let phrase = "First number is 32, and a second number 100. Here is the last number 15."

let reg = /\d+/g;
let result = phrase.match(reg);
let num1 = parseInt(result[0])
console.log(num1)