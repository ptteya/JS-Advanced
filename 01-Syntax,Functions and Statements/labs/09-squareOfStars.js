function squareOfStars(input = 5) {
    for (let row = 0; row < input; row++) {
        let line = [];
        for (let col = 0; col < input; col++) {
            line.push('*')
        }
        console.log(line.join(' '));
    }
}

squareOfStars(1);
//*

// squareOfStars(2);
//* *
//* *

// squareOfStars(5);
//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *
