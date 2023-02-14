function evenPositionElements(arr, string) {



    let newArr = []


    for (let i of arr) {
        newArr.push(i)
    }
    console.log(newArr.join(string));
}

evenPositionElements(['One',

    'Two',

    'Three',

    'Four',

    'Five'],

    '-')