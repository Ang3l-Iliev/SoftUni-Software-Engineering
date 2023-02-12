function censoredWOrd(text, word) {

    let newText = text.split(word)
    let result = newText.join('*'.repeat(word.length))
    console.log(result);
    
}


censoredWOrd('A small sentence with some words', 'small')