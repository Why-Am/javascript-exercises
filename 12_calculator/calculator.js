const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function (arr) {
  let quotient = 1;
  for (num of arr) {
    quotient *= num;
  }
  return quotient;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let quotient = 1;
  for (let i = 1; i < n + 1; ++i) {
    quotient *= i;
  }
  return quotient;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
