function modernTimesOf(arr) {
    let sentance = arr.split(" ")
    for (let word of sentance) {
        if (word.startsWith('#') && word.length > 1) {
            let flag = true
            let wordLower = word.toLowerCase()
            for (let index = 1; index < wordLower.length; index++) {
                if (wordLower.charCodeAt(index) < 97 || wordLower.charCodeAt(index) > 122) {
                    flag = flase
                    break;
                }
            }
            if (flag) {
                console.log(word.slice(1));
            }
        }
    }
}

modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')