function storeCatalogue(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let firstChar = '';

    for (let entry of sortedArr) {
        let [product, price] = entry.split(' : ');

        let currFirstChar = product[0];
        if (firstChar !== currFirstChar) {
            firstChar = currFirstChar;
            console.log(firstChar);
        }
        console.log(`  ${product}: ${price}`);
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);