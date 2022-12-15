function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, array.length - 1);

    let result = array.slice(start, end + 1);
    let sum = result.reduce((acc, el) => acc + Number(el), 0);

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2))