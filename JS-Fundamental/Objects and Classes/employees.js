function employes(input) {
  let listObj = {};

  for (const person of input) {
    listObj.name = person;
    listObj.number = person.length;
    console.log(`Name: ${listObj.name} -- Personal Number: ${listObj.number}`);
  }
}

employes([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
