function wordTracker(data) {
    let result = {}
    let words = data.shift().split(" ")

    for (let word of words) {
        result[word] = 0

    }

    for (let word of data) {
        if (result.hasOwnProperty(word)) {
            let oldValue = result[word]
            result[word] = oldValue + 1
        }
    }
    let sortResult = Object.entries(result).sort(([keyA, valuaA], [ketB, vakueB]) => {
        return vakueB - valuaA
    })
    for (let [key, value] of sortResult) {
        console.log(key, "-", value);

    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)