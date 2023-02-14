function echoFunction(input) {
    
    let elements = input.map(Number)
    let currentNumbers= []
   
    for(let i = 0; i<elements.length ; i++){

        if(i % 2 === 0 ){
            currentNumbers.push(elements[i])
        }
    }
    console.log(currentNumbers.join(' '));
}

echoFunction(['20', '30', '40','50', '60'])