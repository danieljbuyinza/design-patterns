const aLaptop = require("../index.js");

test("Test that a stringified version of the object is returned", () => {
    expect(aLaptop.printAsString()).toBeDefined()
})

test("Test that a stringified version of the object is returned", () => {
    expect(aLaptop.checkRam()).toBe(true);
})