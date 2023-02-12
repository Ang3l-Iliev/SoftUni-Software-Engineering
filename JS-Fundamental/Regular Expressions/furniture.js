function furniture(input) {

    let furnitureArr = []
    let totalSum = 0
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g
    let valid;
    let text = input.join(' ')
    while ((valid = pattern.exec(text)) !== null) {
        let validName = valid.groups['furniture']
        let validPrice = Number(valid.groups['price'])
        let validQuantity = Number(valid.groups['quantity'])
        furnitureArr.push(validName)
        totalSum += validPrice * validQuantity

    }
    console.log(`Bought furniture:`);
    furnitureArr.forEach(element => {
        console.log(element);

    });
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}


furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)