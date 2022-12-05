function solve(x1, y1, x2, y2) {

    validityChecker(x1, y1, 0, 0);
    validityChecker(x2, y2, 0, 0);
    validityChecker(x1, y1, x2, y2);

    function validityChecker(x1, y1, x2, y2) {
        let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        let status = "valid";

        if (!Number.isInteger(distance)) {
            status = 'invalid'
        }

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
    }
}

solve(2, 1, 1, 1);