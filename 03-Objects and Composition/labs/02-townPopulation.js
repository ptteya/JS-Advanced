function townPopulation(input) {
    let townList = {};

    for (let entry of input) {
        let [town, population] = entry.split(' <-> ');

        if (!townList.hasOwnProperty(town)) {
            townList[town] = 0;
        }

        townList[town] += Number(population);
    }

    Object.keys(townList).forEach(townKey => console.log(`${townKey} : ${townList[townKey]}`));
}

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);