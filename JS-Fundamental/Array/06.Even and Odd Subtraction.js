function evenAndOdd(array) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  for (let num of array) {
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(sumOdd);
}
evenAndOdd([1, 2, 3, 4, 5, 6]);
evenAndOdd([3, 5, 7, 9]);
