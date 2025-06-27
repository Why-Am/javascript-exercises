const sumAll = function (a, b) {
    if (
        a < 0 ||
        b < 0 ||
        typeof a !== "number" ||
        typeof b !== "number" ||
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {
        return "ERROR";
    }

    let n;
    if (a > b) {
        n = a - b + 1;
    } else {
        n = b - a + 1;
    }

    return (n * (a + b)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
