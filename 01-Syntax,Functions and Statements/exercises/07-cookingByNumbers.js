function cookingByNumbers(startingPoint, op1, op2, op3, op4, op5) {

    let array = [op1, op2, op3, op4, op5];
    startingPoint = Number(startingPoint);

    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num, 2),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num - (num * 0.2)
    }

    array.forEach(operation => {
        startingPoint = operations[operation](startingPoint);
        console.log(startingPoint);
    })
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')