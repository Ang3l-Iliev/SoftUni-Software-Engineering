function smallestTwoNumbers(input) {
    let myArr = input.slice()
    myArr.sort((a, b) => a - b)

    let newArr = myArr.slice(0, 2)
    console.log(newArr.join(' '));
}


smallestTwoNumbers([30, 15, 50, 5])