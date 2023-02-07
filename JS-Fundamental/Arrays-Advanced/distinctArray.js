function distinct(arr) {
  let newArr = [];
  for (let el of arr) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  console.log(newArr.join(" "));
}

distinct([1, 2, 3, 4]);
