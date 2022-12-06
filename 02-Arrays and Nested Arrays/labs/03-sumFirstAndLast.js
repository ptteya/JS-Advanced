function sumFirstAndLast(input) {
    let firstEl = Number(input.shift());
    let lastEl = Number(input.pop());

    let sum = firstEl + lastEl;
    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
//result: 60