function oddOccurrances(data) {
    let result = {}

    let words = data.split(" ")
    for (let word of words) {
        word = word.toLowerCase()
        if (!result[word]) {
            result[word] = 0

        }
        let oldValue = result[word]
        result[word] = oldValue + 1

    }

    let filterResult = Object.entries(result).filter(([key, value]) => {
        return value % 2 !== 0
    })

    let buf = " "
    for (let [key,value] of filterResult) {
        buf += key + " "
    }
    console.log(key);
}


oddOccurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')