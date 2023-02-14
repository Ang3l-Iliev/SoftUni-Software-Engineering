function procesOddPositions(input) {

    let sum = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            sum.push(input[i])
        }
    }
    let newArr = sum.map(x => x * 2).reverse()
    console.log(newArr);
}

procesOddPositions([10, 15, 20, 25])