function lastKsequance(n, k) {
  let result = [1];

  for (let i = 0; i < n-1; i++) {
    let sequanceK = result.slice(-k);
    let sum = 0;

    for (let el of sequanceK) {
      sum += el;
    }
    result.push(sum);
  }

  console.log(result.join(" "));
}

lastKsequance(6, 3);
