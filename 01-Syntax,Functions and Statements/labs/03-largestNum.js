function solve(arg1, arg2, arg3) {
    let largestNum = 0;
    if (arg1 > arg2) {
        largestNum = arg1;
    } else {
        largestNum = arg2;
    }

    if (arg3 > largestNum) {
        largestNum = arg3;
    }

    console.log(`The largest number is ${largestNum}.`);
}

solve(5, -3, 16);
//result: The largest number is 16.

// With Math.max() function
// function solve(arg1, arg2, arg3) {
//     let largestNum = Math.max(arg1, arg2, arg3);
//     console.log(`The largest number is ${largestNum}.`);
// }