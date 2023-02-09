function rounding(n , x) {
if(x > 15){
    x = 15
}
let number = n.toFixed(x)

   console.log(parseFloat(number)) 

}



rounding(10.5,3)