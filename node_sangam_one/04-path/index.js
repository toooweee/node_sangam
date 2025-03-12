const path = require("path");

console.log(path.join(__dirname, ".."));
console.log(__filename);

console.log(`Filename: ${path.basename(__filename)}`);
console.log(`File extension: ${path.extname(__filename)}`);
