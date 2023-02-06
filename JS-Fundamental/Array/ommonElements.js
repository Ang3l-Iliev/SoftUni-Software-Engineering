function commonElements(string1, string2) {
  for (let element of string1) {
    if (string2.includes(element)) {
      console.log(element);
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
