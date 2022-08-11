const flippingMatrix = (matrix) => {

    let sum = 0;
    let temp;

    const flipRowIfMax = () => {
        for (let i = 0; i < matrix[0].length; i++) {
            let maxIndexInRow = matrix[i].indexOf(Math.max(...matrix[i]));
            if (maxIndexInRow > matrix[0].length / 2 || maxIndexInRow === -1) {
                matrix[i].reverse();
            }
        };
    };

    const flipMatrix = () => {
        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = 0; j < matrix[0].length - 1; j++) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        };
    };

    const getSum = () => {
        for (let i = 0; i < matrix[0].length / 2; i++) {
            for (let j = 0; j < matrix[0].length / 2; j++) {
                sum = sum + matrix[i][j];
            }
        }
    };

    flipRowIfMax();
    flipMatrix();
    flipRowIfMax();
    getSum();
    console.table(matrix);
    return sum;
};


console.table(flippingMatrix([[112, 42, 83, 119, 112, 42, 150, 83], [56, 125, 56, 49, 112, 42, 2, 119], [15, 78, 101, 43, 112, 42, 83, 119], [62, 98, 114, 108, 112, 42, 83, 119], [112, 42, 83, 119, 112, 42, 83, 119], [56, 125, 56, 49, 112, 42, 83, 119], [15, 78, 101, 43, 112, 42, 83, 119], [62, 98, 114, 108, 112, 42, 83, 119]]));