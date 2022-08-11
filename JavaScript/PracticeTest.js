// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

    let actualArray = [];
    for (let i = 1; i <= A.length + 1; i++) {
        actualArray.push(i);
    }


    return Math.min(...actualArray
        .filter(x => !A.includes(x)));

}


console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));