function rotateArray(arr, rotationAmount) {
    for (let i = 0; i < rotationAmount; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }

    console.log(arr.join(' '));
}

rotateArray(
    ['Banana', 'Orange', 'Coconut', 'Apple'],
    15
);
//result: Orange Coconut Apple Banana