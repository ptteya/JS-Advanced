function heroicInventory(input) {
    let heroes = [];

    for (let entry of input) {
        let [name, level, items] = entry.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items });
    }

    let toJSON = JSON.stringify(heroes);
    console.log(toJSON)
}

heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);

console.log('...................');

heroicInventory(['Jake / 1000']);