function juiceFlavors(input) {
    let juices = {};
    let bottles = {};

    for (let entry of input) {
        let [juice, quantity] = entry.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }

        juices[juice] += quantity;

        while (juices[juice] >= 1000) {
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            bottles[juice]++;
            juices[juice] -= 1000;
        }
    }

    for (let [key, value] of Object.entries(bottles)) {
        console.log(`${key} => ${value}`);
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)