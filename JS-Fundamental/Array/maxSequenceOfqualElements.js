function sequance(arr) {
  let maxSequance = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSequance = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentSequance.push(arr[i]);
      } else {
        break;
      }
    }
    if (currentSequance.length > maxSequance.length) {
      maxSequance = currentSequance;
    }
  }
  console.log(maxSequance.join(" "));
}

sequance([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
