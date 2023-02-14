function sumFirstLast(input) {
    let inputNumbers = input.map(Number)
    let firstNumber = inputNumbers[0]
    let lastNumber = inputNumbers[inputNumbers.length-1]
    console.log(firstNumber + lastNumber);
 

    
}

sumFirstLast(['20', '30', '40'])