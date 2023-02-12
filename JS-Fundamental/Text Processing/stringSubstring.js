function stringSubstring(searchWOrd, sentance) {
    let words = sentance.split(' ')

    for (let word of words) {
        if (word.toLowerCase() === searchWOrd.toLowerCase()) {
            console.log(searchWOrd);
            return
        }

    }
    console.log(`${searchWOrd} not found!`);

}



stringSubstring('javascript',
    'JavaScript is the best programming language'
)