function addAndSubstract(arr) {
  let originalArrSum = 0;
  let newArrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    originalArrSum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    newArrSum += arr[i];
  }

  console.log(arr);
  console.log(originalArrSum);
  console.log(newArrSum);
}
addAndSubstract([5, 15, 23, 56, 35]);
