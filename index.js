const laptop = require("./models/laptop");

let dell = new laptop(1000, 12, 2.5, 7, 15, "Inspiron", "Dell", 2.5, "Windows 10", 249879836492);
console.log(dell.printAsString());

module.exports = dell;