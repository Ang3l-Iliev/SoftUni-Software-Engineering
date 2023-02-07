function arrayManipulations(comands) {
    console.log(comands)

    let arr = comands.shift().split(' ').map(Number)
    console.log(arr);
}


arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)