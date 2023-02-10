function charactersInRange(firstChar, secondChar) {
  let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
  let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
  let arr = []

 for(let i = startChar+1 ; i<endChar ; i++){
let currentChar = String.fromCharCode(i)
arr.push(currentChar)
  }
  console.log(arr.join(" "));
}

charactersInRange("a", "d");
