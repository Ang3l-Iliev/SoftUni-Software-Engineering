function equalArrayes(string1, string2) {
  let sum = 0;
  let numString1 = " "
  let numString2 = " "
  for (let i = 0; i < string1.length; i++) {
    string1[i] = Number(string1[i]);
    sum += string1[i];
    numString1 += `${string1[i]} `;
  }

  for (let i = 0; i < string2.length; i++) {
    string2[i] = Number(string2[i]);
    numString2 += `${string2[i]} `

  }
if(numString1 == numString2){
    console.log(`Arrays are identical. Sum: ${sum}`);
}else {
        console.log( `Arrays are not identical. Found difference at ${i} index`);
}

}
equalArrayes(["10", "20", "30"], ["10", "20", "30"]);
