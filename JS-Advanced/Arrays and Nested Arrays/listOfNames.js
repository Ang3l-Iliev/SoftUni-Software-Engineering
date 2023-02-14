function listOfNames(arr) {
    arr.sort((a,b)=>{
        return a.localeCompare(b)
    })

    for(let i = 0 ;i<arr.length; i++){
        console.log(`${i+1}.${arr[i]} `);
    }
    
}

listOfNames(["John", "Bob", "Christina", "Ema"])