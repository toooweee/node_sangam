const path = require("path");
const fs = require("fs");

const writeFileAsync = async (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, fileName), data, (err) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

module.exports = {
  writeFileAsync,
};
