function sameNumbers(input) {
    let numAsString = input.toString();
    let isTheSame = true;
    let digitToCompare = numAsString[0];
    let digitsSum = Number(digitToCompare);

    for (let i = 1; i < numAsString.length; i++) {
        let currChr = numAsString[i];
        digitsSum += Number(currChr);

        if (currChr !== digitToCompare) {
            isTheSame = false;
        }
    }

    console.log(isTheSame);
    console.log(digitsSum)
}

sameNumbers(2222222)
// true
// 14

sameNumbers(1234)
// false
// 10