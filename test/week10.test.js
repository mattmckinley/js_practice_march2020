const {
    hexToRGB
} = require("../challenges/week10");

describe("hexToRGB", () => {
    test("Should transform the hex code into an RGB code, returned as a string", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
});