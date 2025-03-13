const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "callback.txt"),
  { encoding: "utf8" },
  (err, data) => {
    if (err) {
      console.log(err);
    }

    fs.writeFile(path.join(__dirname, "copied.txt"), data, (err) => {
      if (err) {
        console.log(err);
      }

      fs.appendFile(
        path.join(__dirname, "copied.txt"),
        " we updated in at third callback",
        (err) => {
          if (err) {
            console.log(err);
          }
        },
      );
    });
  },
);
