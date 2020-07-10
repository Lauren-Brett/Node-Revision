let fs = require("fs");

fs.appendFile(
  "newFile.txt",
  "This is the new content that now shows in the new file",
  function (err) {
    if (err) throw err;
    console.log("saving");
  }
);

fs.writeFile("newFileWritten.txt", "words are being saved!", function (err) {
  if (err) throw err;
  console.log("this works");
});
