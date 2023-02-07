function dayOfWeek(n) {
  let dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if(n >= 1 && n <= 7){
    console.log(dayOfWeek[n - 1]);
  }else {
    console.log("Invalid day!");
  }
}

dayOfWeek(1);
