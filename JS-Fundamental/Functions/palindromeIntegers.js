function main(input) {
    for(let el of input){
        let current = String(el);
        let reversed = String(el).split('').reverse().join('')
        
        if(current === reversed){
            console.log(true);
        }else{
            console.log(false);
        }
        
    }
    
}



main([123,323,421,121])