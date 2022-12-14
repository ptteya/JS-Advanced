function solution() {
    let resultStr = '';

    return {
        append(str) {
            resultStr += str;
        },
        removeStart(n) {
            resultStr = resultStr.substring(n);
        },
        removeEnd(n) {
            resultStr = resultStr.substring(0, resultStr.length - n);
        },
        print() {
            console.log(resultStr);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
