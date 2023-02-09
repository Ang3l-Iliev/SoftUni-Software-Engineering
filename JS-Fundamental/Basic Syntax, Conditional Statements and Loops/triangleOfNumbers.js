function triangleOfNumber(num) {
  for (let i = 1; i <= num; i++) {
    let printLine = "";
    for (let row = 1; row <= i; row++) {
      printLine += `${i} `;
    }
    console.log(printLine);
  }
}

triangleOfNumber(3);
