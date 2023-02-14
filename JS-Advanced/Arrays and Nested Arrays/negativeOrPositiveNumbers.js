function negativOrPositiv(input) {

let result = []

for( let currentNumber of input){
    if(currentNumber < 0 ){
        result.unshift(currentNumber)
    }else{
        result.push(currentNumber)
    }
}

    console.log(result.join('\n'));
}


negativOrPositiv([7, -2, 8, 9])