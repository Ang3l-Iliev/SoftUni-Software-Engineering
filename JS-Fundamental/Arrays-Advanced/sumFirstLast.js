function sumFirstLast(arr) {
    let firstElement = arr[0]
    let lastElement = arr[arr.length-1]
    console.log(Number(firstElement) + Number(lastElement));

    return Number(firstElement) + Number(lastElement)
}

sumFirstLast([20, 30, 40])
console.log(sumFirstLast([20, 30, 40]))