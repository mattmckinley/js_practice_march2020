const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
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
        }).toThrow("Valid DNA string required");
        expect(() => {
            isValidDNA(["A", "B", "C"]);
        }).toThrow("Valid DNA string required");
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
    test("it throws an error if passed empty argument ", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
    });
    test("it throws an error if passed invalid DNA string", () => {
        expect(() => {
            getComplementaryDNA(12345);
        }).toThrow("Valid DNA string required");
    });
    test("it throws an error if passed invalid DNA string", () => {
        expect(() => {
            getComplementaryDNA("WXYZ12334566XYZ");
        }).toThrow("Valid DNA string required");
    });
    test("returns a string of the complementary base pairs for valid DNA string", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
    test("returns a string of the complementary base pairs for valid DNA string if passed lowercase", () => {
        expect(getComplementaryDNA("AcTg")).toBe("TGAC");
    });
});

describe("isItPrime", () => {
    test("if throws an error if passed empty argument", () => {
        expect(() => {
            isItPrime();
        }).toThrow("number is required");
    });
    test("if throws an error if not a number", () => {
        expect(() => {
            isItPrime("String");
        }).toThrow("number is required");
    });
    test("returns true if the number is prime", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
    });
    test("returns false if the number is not prime", () => {
        expect(isItPrime(12)).toBe(false);
    });
});

describe("createMatrix", () => {
    it("returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]];
        expect(result).toEqual(expected);
    });
    it("returns a matrix of 5 * 5 when passed 5, and fill = number", () => {
        const result = createMatrix(5, 5);
        const expected = [
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5]
        ];
        expect(result).toEqual(expected);
    });
    it("returns a matrix of 3 * 3 when passed 3 and and array", () => {
        const result = createMatrix(3, [1, 2, 3]);
        const expected = [
            [[1, 2, 3], [1, 2, 3], [1, 2, 3]],
            [[1, 2, 3], [1, 2, 3], [1, 2, 3]],
            [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
        ];
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
    test("returns true if there are staff and > 3 are sheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Wednesday"] },
            { name: "paul", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Tuesday", "Wednesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
    });
});