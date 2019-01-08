/*
    Implementation of Will Ness's 2-3-5-7 Wheel Sieve Generator, credits to Vladmir Agafonkin for JS base code:
    https://beta.observablehq.com/@mourner/fast-prime-generator
 */

let postponedSieve = function* () {
    yield 2; yield 3; yield 5; yield 7;

    const   sieve = new Map(),
            innerGenerator = postponedSieve();

    innerGenerator.repeat(2);

    for (let p = 3, prime = 9; true; prime += 2) {
        let s = sieve.get(prime);

        if (s !== undefined) {
            sieve.delete(prime);
        } else if (prime < p * p) {
            yield prime;
            continue;
        } else {
            s = 2 * p;
            p = innerGenerator.next().value;
        }

        let k = prime + s;
        while (sieve.has(k)) k += s;
        sieve.set(k, s);
    }
};

postponedSieve.prototype.repeat = function(amount) {
    if (!Number.isInteger(amount)) {
        return this;
    }

    for (let run = 0; run < amount; run++) {
        this.next();
    }

    return this;
};

module.exports = postponedSieve;