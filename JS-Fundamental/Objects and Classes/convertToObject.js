function convertObject(jsonString) {
let person = JSON.parse(jsonString)
    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`);

    }
    
}


convertObject(`{"name": "George", "age": 40, "town": "Sofia"}`)