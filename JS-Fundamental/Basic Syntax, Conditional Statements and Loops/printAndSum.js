function printAndSum(n, x) {
  let sum = 0;
  let printLine = ''

  for (let i = n; i <= x; i++) {
    sum += i
    printLine += `${i} `
  }
 
  console.log(printLine);
  console.log(`Sum: ${sum}`);
  
}

printAndSum(0, 26);
