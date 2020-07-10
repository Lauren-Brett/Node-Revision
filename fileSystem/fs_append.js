let fs = require("fs");

fs.appendFile(
  "newFile.js",
  "This is the new content in the new file",
  function (err) {
    if (err) throw err;
    console.log("saving");
  }
);
