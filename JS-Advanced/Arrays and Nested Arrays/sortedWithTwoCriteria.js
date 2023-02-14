function criteria(array) {
    let sorted = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })
    sorted.forEach(element => {
        console.log(element);
    });
}
criteria(['alpha',
    'beta',
    'gamma'])
