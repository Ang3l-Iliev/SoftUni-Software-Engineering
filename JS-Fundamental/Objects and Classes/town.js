function town(input) {
    let curentTown = {};

    for (let city of input) {
        let cityElements = city.split(' | ');
        let townName = cityElements[0];
        let townLatitude = Number(cityElements[1]).toFixed(2);
        let townLongitude = Number(cityElements[2]).toFixed(2);
        curentTown.town = townName;
        curentTown.latitude = townLatitude
        curentTown.longitude = townLongitude
        console.log(curentTown);
    }

    
}

town(["Sofia | 42.696552 | 23.32601", 
      "Beijing | 39.913818 | 116.363625"]);
