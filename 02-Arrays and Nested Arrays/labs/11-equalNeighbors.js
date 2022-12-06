function equalNeighbors(input) {

    let equalPairs = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {

            let currElement = input[i][j];
            if (input[i + 1] !== undefined && currElement === input[i + 1][j]) {
                equalPairs++;
            }
            if (input[i][j + 1] !== undefined && currElement === input[i][j + 1]) {
                equalPairs++
            }

        }
    }

    return equalPairs;
}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));

console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
));

