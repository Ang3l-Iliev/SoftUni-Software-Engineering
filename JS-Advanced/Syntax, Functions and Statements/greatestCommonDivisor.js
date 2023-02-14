function greatestCommonDivisor(x, y) {
let sum = 0 

    for (let i = 0; i <= x; i++) {
        
        if (i % y === 0) {
            sum=i
        } else {
           sum=y
        }





    }
    console.log(sum);
}

greatestCommonDivisor(15, 5)
