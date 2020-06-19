const {
    sumDigits,
    createRange,
    hexToRGB
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("Throws an error if nothing passed", () => {
        expect(() => sumDigits()).toThrow("n is required");
    });
    test("Throws an error if number not passed", () => {
        expect(() => sumDigits(false)).toThrow("n must be number");
    });
    test("returns the sum of all digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(0)).toBe(0);
    });
});   

describe("createRange", () => {
    test("Throws an error if start not supplied", () => {
        expect(() => createRange(undefined, 5, 2)).toThrow("start is required");
    });
    test("Throws an error if end not supplied", () => {
        expect(() => createRange(1, undefined, 2)).toThrow("end is required");
    });
    test("returns correct array when passed values for start, end and step", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(5, 30, 5)).toEqual([5, 10, 15, 20, 25, 30]);
    });
    test("returns correct array when passed values for start and end, excluding step", () => {
        expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

describe("hexToRGB", () => {
    test("Throws an error if hex string is not passed", () => {
        expect(() => hexToRGB()).toThrow("hexStr is required");
    });
    test("Throws an error if no # at start of hexStr", () => {
        expect(() => hexToRGB("FF1133")).toThrow("# Hash needed at start of hexStr");
    });
    test("Should transform the hex code into an RGB code, returned as a string", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#998FC7")).toEqual("rgb(153,143,199)");
    });
    test("Case insensitive", () => {
        expect(hexToRGB("#ff1133")).toEqual("rgb(255,17,51)");
    });
});