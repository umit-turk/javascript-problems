let arr = [1, 5, 6, 10, 11, 12, 14];

console.log(arr.indexOf(10));
console.log(arr.lastIndexOf(14));

let over10 = function (elem, index, theArray) {
  console.log(elem + " - " + index + " - " + " - " + theArray);
  return elem > 10;
};

console.log(arr.findIndex(over10));

let result = arr.find((elem) => elem > 5 && elem < 11);
console.log(result);
