function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sequence = result.slice(-k);
        let sum = 0;

        for (let el of sequence) {
            sum += el;
        }

        result.push(sum);
    }

    return result;
}

console.log(lastKNumbersSequence(8, 2));
//result: [1, 1, 2, 3, 5, 8, 13, 21]