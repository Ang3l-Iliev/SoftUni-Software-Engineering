function sameNumbers(num) {
    let numAssString = num.toString()
    let firstDigit = numAssString[0]
    let isSame = true
    let sum = 0
    for (let i = 0; i < numAssString.length; i++) {
        if (numAssString[i] !== firstDigit) {
            isSame = false
        }
        sum += Number(numAssString[i])
    }


    console.log(isSame)
    console.log(sum);;
}
sameNumbers("2222222")