// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// X file size = 100
// B Downloaded/Minute [10,6,6,8]
// Z Average of last observations

const solution = (X, B, Z) => {

    const downloadRemained = X - B.reduce((a, b) => a + b);
    let sumOfZLastNumbers = 0;

    for (let i = B.length - 1; i > B.length - 1 - Z; i--) {
        sumOfZLastNumbers = sumOfZLastNumbers + B[i];
    }

    return downloadRemained / (sumOfZLastNumbers / Z);

};

console.log(solution(100, [10, 6, 6, 8], 2));