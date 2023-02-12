function convertJson(firstName, lastName, hairColor) {
  let res = { firstName, lastName, hairColor };
  let final = JSON.stringify(res);
  console.log(final);
}
convertJson("George", "Jones", "Brown");
