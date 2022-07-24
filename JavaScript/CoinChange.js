// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

const coinChange = (coins, amount) => {

    let dp = new Array(amount + 1);
    coins.sort((a, b) => a - b);
    dp[0] = 0;
    dp.fill(amount + 1, 1);
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j <= coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
            } else {
                break;
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};


console.log(coinChange([1, 2, 3, 5], 11));




// greedy solution that is not the answer

    // coins.sort((a, b) => a - b);

    // let counter = 0;
    // let pointer = coins.length - 1;

    // while (pointer >= 0) {
    //     while (amount >= coins[pointer]) {
    //         amount = amount % coins[pointer];
    //         counter++;
    //     }
    //     pointer--;
    // }

    // if (amount === 0) {
    //     return counter;
    // }
    // else {
    //     return -1;
    // }