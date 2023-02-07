function processOddNumbers(numbers) {
  let filterElements = numbers.filter((el,i) => i % 2 != 0);
  let doubleNumber = filterElements.map(x => x * 2);
  let reversed = doubleNumber.reverse();
  console.log(reversed.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
