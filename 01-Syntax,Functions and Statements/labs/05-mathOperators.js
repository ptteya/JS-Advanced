function solve(firstNum, secondNum, str) {
    let result = 0;

    switch (str) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }

    console.log(result);
}

solve(5, 6, '+');
//result : 11

// solve(3, 5.5, '*')
//result: 16.5