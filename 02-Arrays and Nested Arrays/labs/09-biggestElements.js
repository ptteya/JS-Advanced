function biggestElements(input) {
    let arr = [];
    input.forEach(el => arr.push(...el));
    let max = Math.max(...arr);
    return max;
}

console.log(biggestElements([[3, 5, 7, 12],
[-1, 4, 33, 2], [8, 3, 0, 4]]));
console.log(biggestElements([[20, 50, 10],
[8, 33, 145]]));