function negativOrPositive(arrOfString) {
    let result = []
    for ( let el of arrOfString){
        el = Number(el)
        if(el < 0){
            result.unshift(el)
        }else {
            result.push(el)
        }

    }
    console.log(result.join("\n"));
}


negativOrPositive(["7",'-2','8','9'])