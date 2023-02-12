function counterStrike(input) {
let won = 0
let initialEnergie = Number(input[0]);
let command = ""


for(let i = 1 ;i<input.length;i++){
    let distance = Number(input[i])
   
    if(command !=="End of battle" ){
        if(initialEnergie > 0){
             initialEnergie -= distance
             won++
             
        }
       
    }

    if(initialEnergie <=0){
        console.log(`Not enough energy! Game ends with ${won} won battles and ${0} energy".`);
    
    }else{
        console.log(`Won battles: ${won}. Energy left: ${initialEnergie}`);
    }
    
    
}


    
    
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])