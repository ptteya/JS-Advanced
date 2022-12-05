function aggregateElements(arr) {

    let sum = 0;
    for (let element of arr) {
        sum += element;
    }

    let inverseSum = 0;
    for (let element of arr) {
        inverseSum += 1 / element;
    }

    let concat = "";
    for (let element of arr) {
        concat += String(element)
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
//result:
// 6
// 1.8333333333333333
// 123

// aggregateElements([2, 4, 8, 16]);
//result:
// 30
// 0.9375
// 24816