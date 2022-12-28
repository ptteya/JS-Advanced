function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        transformWithUnits(value) {
            if (this.units === 'm') {
                return value / 100;
            }

            if (this.units === 'mm') {
                return value * 10;
            }

            return value;
        }

        get area() {

        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            const radius = this.transformWithUnits(this.radius);
            return Math.PI * radius * radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.transformWithUnits(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            const width = this.transformWithUnits(this.width);
            const height = this.transformWithUnits(this.height);

            return width * height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.transformWithUnits(this.width)}, height: ${this.transformWithUnits(this.height)}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let obj = classHierarchy();
let c = new obj.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new obj.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
