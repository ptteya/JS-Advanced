function sumOfNumbersNToM(n, m) {
    let firstNum = Number(n);
    let secondNum = Number(m);
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNumbersNToM('1', '5');
//result: 15

// sumOfNumbersNToM('-8', '20');
//result: 174