const removeFromArray = function (arr) {
    let exclude = [];
    for (let i = 1; i < arguments.length; ++i) {
        exclude.push(arguments[i]);
    }
    let result = [];

    let matched;
    for (let i = 0; i < arr.length; ++i) {
        matched = false;
        for (let j = 0; j < arguments.length; ++j) {
            if (arguments[j] === arr[i]) {
                matched = true;
            }
        }

        if (matched) continue;
        result.push(arr[i]);
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
