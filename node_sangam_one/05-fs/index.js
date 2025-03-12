const fileSystem = require("./files.js");

fileSystem
  .writeFileAsync("someFile.txt", "hihihi")
  .then(() => {
    console.log("hihihi");
  })
  .catch((err) => {
    console.log(err);
  });
