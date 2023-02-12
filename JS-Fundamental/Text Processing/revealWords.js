function revealWords(words, sentaces) {
    let wordsToReveal = words.split(', ')
    let sentacesArr = sentaces.split(' ')

    for (const element of wordsToReveal) {
        for (const word of sentacesArr) {
            if(word.includes('*') && word.length===element.length){
                sentaces = sentaces.replace(word,element)
            }
        }
        
    }
console.log(sentaces);

}


revealWords('great',
'softuni is ***** place for learning new programming languages'
)