function multiplicationTable(number) {
     let times = 0
     let product = 0

    for( let i = 1 ; i <= 10 ; i++){
        times = i
        
        product = number * times
        let currentSum = `${number} X ${times} = ${product}`
        console.log(currentSum);
    }
    
}


multiplicationTable(5)