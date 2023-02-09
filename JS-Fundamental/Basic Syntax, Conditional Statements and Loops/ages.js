function ages(age) {
  let sex = "";
  if (age >= 0 && age < 2) {
    sex = "baby";
  } else if (age >= 3 && age < 13) {
    sex = "child";
  } else if (age >= 14 && age < 19) {
    sex = "teenage";
  } else if (age >= 20 && age < 65) {
    sex = "adult";
  } else if (age >= 65) {
    sex = "elder";
  } else {
    sex = "out of bounds";
  }

  console.log(sex);
}

ages(20);
ages(1);
ages(100);
ages(-1);
