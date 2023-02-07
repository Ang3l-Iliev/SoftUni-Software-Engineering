function smallestTwoNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  let sliced = numbers.slice(0, 2).join(" ");
  return sliced;
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
