function adressBook(arrInfo) {
    let adressInfo = {}


    for (let line of arrInfo) {
        let [name, adress] = line.split(":")
        adressInfo[name] = adress


    }

    let unsorted = Object.entries(adressInfo)
    let sorted = unsorted.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })

   
    for (let [name, adress] of sorted) {
        console.log(name + " -> " + adress);
    }


}

adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)