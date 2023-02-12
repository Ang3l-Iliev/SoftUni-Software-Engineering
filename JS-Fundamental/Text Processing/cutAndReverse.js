function cutAndReverse(input) {
    let reversed = input.split('').reverse().join('')
    let sliceOne= reversed.slice(reversed.length/2)
    let sliceTwo =reversed.slice(0,reversed.length/2)
   
   console.log(reversed);
    console.log(sliceOne);

    console.log(sliceTwo);
    
}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')