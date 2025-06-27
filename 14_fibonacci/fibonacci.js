const fibonacci = function (index) {
    if (index < 0) return "OOPS";

    index = parseInt(index);

    let sequence = [0, 1, 1];
    if (index < 2) return sequence[index];

    for (let i = 2; i < index; ++i) {
        sequence.push(sequence[i] + sequence[i - 1]);
    }

    return sequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
