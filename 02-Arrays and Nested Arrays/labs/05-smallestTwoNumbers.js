function smallestTwoNumbers(input) {
    input.sort((a, b) => a - b);
    let result = input.slice(0, 2);
    console.log(result.join(" "));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
// result: 0 3