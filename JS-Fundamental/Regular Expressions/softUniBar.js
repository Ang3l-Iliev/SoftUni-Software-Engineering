function softUniBar(input) {

    let totalSum = 0




    let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.0-9]*\<(?<product>\w+)\>[^$%|.0-9]*\|(?<count>\d+)\|(?<price>\d+\.\d+)?\$/gm

    let text = input.join('-')

    let current = pattern.exec(text)


    while (current) {
        let currentPrice = current.groups.count * current.groups.price

        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);
        totalSum += currentPrice
        current = pattern.exec(text)


    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);

}


softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)