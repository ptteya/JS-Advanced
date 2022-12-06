function magicMatrices(input) {
    let rowSum = input[0].reduce((a, b) => a + b, 0);

    for (let i = 1; i < input.length; i++) {
        let currRowSum = input[i].reduce((a, b) => a + b, 0);
        if (currRowSum !== rowSum) {
            return false;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let currColumnSum = 0;
        for (let j = 0; j < input.length; j++) {
            currColumnSum += input[j][i];
        }
        if (currColumnSum !== rowSum) {
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));