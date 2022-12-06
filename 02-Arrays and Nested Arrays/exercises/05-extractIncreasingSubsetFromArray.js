function solve(input) {
    let biggestNum = 0;
    let resultArr = [];

    for (let currNumber of input) {
        if (currNumber >= biggestNum) {
            resultArr.push(currNumber);
            biggestNum = currNumber;
        }
    }

    return resultArr;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));