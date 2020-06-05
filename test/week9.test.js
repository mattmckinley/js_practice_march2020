const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    areWeCovered,
    createMatrix
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("if throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");
    });
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("it works with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });
    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("throws an error if passed empty argument", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });
    test("throws an error if anything but string is passed", () => {
        expect(() => {
            isValidDNA(123);
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(["A", "B", "C"]);
        }).toThrow("str is required");
    });
    test("returns true if it is a valid DNA string", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });
    test("returns false if it's not a valid DNA string", () => {
        expect(isValidDNA("WXYZ")).toBe(false);
    });
    test("returns true with lowercase", () => {
        expect(isValidDNA("CgtA")).toBe(true);
    });
    test("returns false with lowercase", () => {
        expect(isValidDNA("wXYz")).toBe(false);
    });
    test("returns false with DNA characters mixed in", () => {
        expect(isValidDNA("CZ34gHptSbtA")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("if throws an error if passed empty argument ", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
    });
});

describe("isItPrime", () => {
    test("if throws an error if passed empty argument ", () => {
        expect(() => {
            isItPrime();
        }).toThrow("number is required");
    });
});

describe("createMatrix", () => {
    it("returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1);
        const expected = [["foo"]];
        expect(result).toEqual(expected);
    });
});

describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });
    test("returns false if there are staff but < 3 not sheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });
});