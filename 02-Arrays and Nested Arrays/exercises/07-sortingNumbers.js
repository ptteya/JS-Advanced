function sortingNumbers(input) {
    let fromSmallToBig = input.sort((a, b) => a - b);
    let resultArr = [];

    for (let i = 0; i < fromSmallToBig.length / 2; i++) {
        let currSmall = fromSmallToBig[i];
        let currBig = fromSmallToBig[(fromSmallToBig.length - 1) - i];
        if (currBig === currSmall) {
            resultArr.push(currSmall);
        } else {
            resultArr.push(currSmall, currBig);
        }
    }

    return resultArr;
}

console.log(sortingNumbers([3, 52, 1, 65, 48]));