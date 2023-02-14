function fruits(fruit, weight, price) {
    let kilograms = weight * 0.10
    let moneyNeeded = (kilograms * price) / 100
    let total = (weight * price) / 100
    let totalKilogram = (total / price) / 10

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${totalKilogram.toFixed(2)} kilograms ${fruit}.`);
}




fruits('orange', 2500, 1.80)