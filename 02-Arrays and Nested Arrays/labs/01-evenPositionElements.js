function evenPositions(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result.push(input[i]);
        }
    }

    console.log(result.join(" "));
}

evenPositions(['20', '30', '40', '50', '60']);
//result : 20 40 60