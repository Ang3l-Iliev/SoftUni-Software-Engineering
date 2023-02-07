function houseParty(arr) {
  let resArr = [];
  for (let el of arr) {
    let command = el.split(" ");
    let name = command[0];

    if (command.length === 3) {
      if (resArr.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        resArr.push(name);
      }
    } else {
      if (!resArr.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = resArr.indexOf(name);
        resArr.splice(index, 1);
      }
    }
  }

  console.log(resArr.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
