function arrayRotation(arr, n) {
// while (n > 0) {
//    let elementTOmove = arr.shift() 
//    arr.push(elementTOmove)

// n--

// }
// console.log(arr.join(" "));


for(let i = 0 ; i < n ; i++){
    let elementToMove = arr.shift()
    arr.push(elementToMove)
    
}
console.log(arr);
}
arrayRotation([51, 47, 32, 61, 21], 2)