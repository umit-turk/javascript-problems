var range = function (start, end) {
  var arr = [];
  count = start;

  while (count <= end) {
    arr.push(count);
    count++;
  }
  return arr;
};
var sum = function (arr) {
  var total = 0;

  while (arr.length > 0) {
    total = total + arr.pop();
  }
  return total;
};

var sum2 = function (arr) {
  var total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

console.log(sum(range(1, 10)));
console.log(sum2(range(1, 10)));

var range2 = function (start, end) {
  var arr = [],
  cnt = start;
  function increaseCount(cnt) {
    if (cnt >= end) {
      return arr.push(end);
    } else {
      arr.push(cnt);
      increaseCount(++cnt);
    }
  };
  increaseCount(cnt);
  return arr;
};

var sum3 = function (arr) {
  return arr.reduce(function (total, val) {
    return total + val;
  });
};
console.log(sum3(range2(1,10)));