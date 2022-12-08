function rectangle(width, height, color) {

    function getColor(color) {
        return color[0].toUpperCase() + color.substring(1);
    }

    let rectProperties = {
        width,
        height,
        color: getColor(color),
        calcArea() {
            return this.width * this.height;
        }
    }


    return rectProperties;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


