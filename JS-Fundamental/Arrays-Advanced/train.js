function train(arr) {
  let passengersInTrainArr = arr.shift().split(" ").map(Number);
  let maxCapasity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    if (currentCommand[0] === "Add") {
      passengersInTrainArr.push(Number(currentCommand[1]));
    } else {
      for (let a = 0; a < passengersInTrainArr.length; a++) {
        if (
          Number(currentCommand[0]) + passengersInTrainArr[a] <=
          maxCapasity
        ) {
          passengersInTrainArr[a] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInTrainArr.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
