function cityTaxes(name, population, treasury) {
    let cityInfo = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage) {
            this.population *= percentage / 100 + 1;
        },
        applyRecession(percentage) {
            this.treasury *= 1 - percentage / 100;
        },
    };

    return cityInfo;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

