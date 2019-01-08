const       table               = require('table').table,
            postponedSieve      = require('./lib/postponedSieve');

let         primeGen            = postponedSieve(),
            primeCount          = 1,
            primeTotal          = parseInt(process.argv[2]),
            primeList           = new Array(primeTotal+1),
            primeTable          = new Array(primeList.length);

primeList[0] = 1;

while (primeCount < primeList.length) {
    primeList[primeCount++] = primeGen.next().value;
}

for (let y = 0; y < primeList.length; y++) {
    let primeRow = new Array(primeList.length);
    for (let x = 0; x < primeList.length; x++) {
        primeRow[x] = (x < y)?primeTable[x][y]:(primeList[y] * primeList[x]);
    }
    primeTable[y] = primeRow;
}

let tableOutput = table(primeTable);
console.log(tableOutput);