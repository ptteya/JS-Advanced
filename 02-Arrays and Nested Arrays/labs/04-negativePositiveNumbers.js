function negativeAndPositiveNums(input) {
    let resultArr = [];

    for (let el of input) {
        if (el < 0) {
            resultArr.unshift(el);
        } else {
            resultArr.push(el);
        }
    }

    console.log(resultArr.join("\n"));
}

negativeAndPositiveNums([3, -2, 0, -1]);
//result:
// -1
// -2
// 3
// 0
