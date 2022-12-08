function carFactory(input) {
    let car = {
        model: input.model,
    };

    let engine = {};
    let carriage = {};

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    if (input.carriage === 'hatchback') {
        carriage.type = input.carriage;
        carriage.color = input.color;
    } else if (input.carriage === 'coupe') {
        carriage.type = input.carriage;
        carriage.color = input.color;
    }

    let wheelSize = input.wheelsize;
    if (input.wheelsize % 2 === 0) {
        wheelSize--;
    }

    car.engine = engine;
    car.carriage = carriage;
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));