function autoCompany(input) {
    let allProducedCars = {};

    for (let entry of input) {
        let [brand, model, producedCars] = entry.split(' | ');

        if (!allProducedCars.hasOwnProperty(brand)) {
            allProducedCars[brand] = {}
        }

        if (!allProducedCars[brand].hasOwnProperty(model)) {
            allProducedCars[brand][model] = 0;
        }

        allProducedCars[brand][model] += Number(producedCars);
    }

    for (let [key, value] of Object.entries(allProducedCars)) {
        console.log(key);
        Object.entries(value).forEach(v => console.log(`###${v[0]} -> ${v[1]}`));
    }
}

autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);