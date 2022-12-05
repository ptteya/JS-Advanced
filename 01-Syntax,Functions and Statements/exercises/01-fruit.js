function calculateFruitPrice(fruit, weightInGram, price) {
    let weightInKg = weightInGram / 1000;
    let totalPrice = price * weightInKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

calculateFruitPrice('orange', 2500, 1.80);
// I need $4.50 to buy 2.50 kilograms orange.

// solve('apple', 1563, 2.35)
// I need $3.67 to buy 1.56 kilograms apple.