function biggerHalf(input) {
    let sorted = input.sort((a, b) => a - b);
    let length = Math.floor(sorted.length / 2);
    let result = [];

    for (let i = length; i < sorted.length; i++) {
        result.push(sorted[i]);
    }
    return result;
}

console.log(biggerHalf([4, 7, 2, 5]))
//result: [5, 7]

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
//result: [7, 14, 19, 19]