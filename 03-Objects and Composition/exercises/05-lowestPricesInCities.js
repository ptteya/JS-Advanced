function lowersPricesInCities(input) {
    let output = new Map();

    for (let entry of input) {
        let [town, product, price] = entry.split(' | ');

        price = Number(price);

        if (!output.has(product)) {
            output.set(product, [town, price]);
        }

        if (output.get(product)[1] > price) {
            output.set(product, [town, price]);
        }
    }

    let entries = Array.from(output.entries());

    for (let [key, value] of entries) {
        let townWithLowestPrice = value[0];
        let lowersPrice = value[1];

        console.log(`${key} -> ${lowersPrice} (${townWithLowestPrice})`)
    }
}

lowersPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);


//another solution
// function lowersPricesInCities(input) {
//     let output = new Map();

//     for (let entry of input) {
//         let [town, product, price] = entry.split(' | ');

//         if (!output.has(product)) {
//             output.set(product, {})
//         }

//         output.get(product)[town] = Number(price);
//     }

//     let entries = Array.from(output.entries());

//     for (let [key, value] of entries) {
//         let sortedValue = Object.entries(value).sort((a, b) => a[1] - b[1]);

//         let lowersPrice = sortedValue[0][1];
//         let townWithLowestPrice = sortedValue[0][0];

//         console.log(`${key} -> ${lowersPrice} (${townWithLowestPrice})`)
//     }
// }
