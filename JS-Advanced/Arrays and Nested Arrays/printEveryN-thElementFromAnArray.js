function printEveryNthElementFromAnArray(arr, number) {

    let newArr = []
    for (let i = 0; i < arr.length; i += number) {
        newArr.push(arr[i])
    }

    return newArr
}

console.log(printEveryNthElementFromAnArray(['5',

    '20',

    '31',

    '4',

    '20'],

    2))