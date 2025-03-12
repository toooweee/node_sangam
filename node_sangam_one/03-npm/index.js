const lodash = require("lodash");

const names = ["islam", "lera", "valera", "john"];

const capitalizedNames = lodash.map(names, lodash.capitalize);

console.log(capitalizedNames);
