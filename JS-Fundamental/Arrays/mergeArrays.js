function mergeArrays(string1, string2) {
let newArr = []

for(let i = 0 ; i<string1.length ; i++){
    if(i % 2 === 0){
        newArr[i]= Number(string1[i]) + Number(string2[i])
    }else {
        newArr[i] = string1[i] + string2[i]

    }
}
console.log(newArr.join ( ' - '));
console.log(newArr);

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)