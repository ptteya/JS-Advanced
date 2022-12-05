function circleArea(input) {
    let inputType = typeof (input);
    if (inputType === "number") {
        let radius = input;
        let area = Math.PI * (radius ** 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}
circleArea(5);
//result: 78.54

// circleArea('name');
//result: We can not calculate the circle area, because we receive a string.