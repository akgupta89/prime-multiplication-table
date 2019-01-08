describe("postponedSieve", () => {
    let postponedSieve          = require('../lib/postponedSieve'),
        generator               = postponedSieve(),
        generatorConstructor    = (function*(){})().constructor;

    it("should expect the algorithm to exist", () => {
        expect(postponedSieve).toBeDefined();
    });

    it("should expect to be a generator object", () => {
        expect(generator.constructor === generatorConstructor).toBeTruthy();
    });

    it("should expect to have a repeat method", () => {
        expect(generator.repeat).toBeTruthy();
    });

    describe("running the repeat() method", function () {
        beforeEach(() => {
            generator = postponedSieve();
        });

        it("should return a generator when given a non integer", () => {
            expect(generator.repeat("bark").constructor === generatorConstructor).toBeTruthy();
        });

        it("should return a generator when given an integer", () => {
            expect(generator.repeat(10).constructor === generatorConstructor).toBeTruthy();
        });
    });

    describe("running the next() method", () => {
        beforeEach(() => {
            generator = postponedSieve();
        });

        it("should return 2", () => {
            expect(generator.next().value).toBe(2);
        });

        it("should return an object", () => {
            expect(generator.next() instanceof Object).toBeTruthy();
        });

        it("should return 2, again with a new generator", () => {
            expect(generator.next().value).not.toBe(3);
        });

        it("should return 3 when ran 1 time", () => {
            expect(generator.repeat(1).next().value).toBe(3);
        });

        it("should return 13 when ran 6 times", () => {
            expect(generator.repeat(5).next().value).toBe(13);
        });

        it("should return 6143 when ran 801 times", () => {
            expect(generator.repeat(800).next().value).toBe(6143);
        });
    });
});