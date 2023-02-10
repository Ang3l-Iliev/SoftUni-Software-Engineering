function oddAndEven(number) {
  let textNum = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let n of textNum) {
    let char = Number(n);
    if (char % 2 === 0) {
      evenSum +=char;
    } else {
      oddSum += char;
    }
  }
  console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEven(1000435);
