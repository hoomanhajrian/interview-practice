function maxMin(k, arr) {

    let array = new Array(k);
    let min = Infinity;
    arr.sort((a, b) => a - b);
    while (arr.length > 0) {
        for (let i = 0; i < k; i++) {
            array[i] = arr.shift();
        }
        console.log(array);
        console.log(Math.max(...array) - Math.min(...array));
        if (Math.max(...array) - Math.min(...array) < min) {
            min = Math.max(...array) - Math.min(...array);
        }
    }
    return min;
}



console.log(maxMin(5, [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232]));

console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));