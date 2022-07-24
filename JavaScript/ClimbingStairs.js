/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n + 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;


};


console.log(climbStairs(44));



// if (n === 0 || n === 1) {
    //     return 1;
    // }
    // else {
    //     return climbStairs(n - 1) + climbStairs(n - 2);
    // }