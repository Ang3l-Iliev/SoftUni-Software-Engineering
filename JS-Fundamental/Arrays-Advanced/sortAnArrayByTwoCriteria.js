function sortAnArry(arr) {
  let newArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(newArr.join("\n"));
}

sortAnArry(["alpha", "beta", "gamma"]);
