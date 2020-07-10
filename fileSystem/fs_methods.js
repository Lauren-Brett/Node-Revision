let fs = require("fs");

// fs.appendFile(
//   "newFile.txt",
//   "This is the new content that now shows in the new file",
//   function (err) {
//     if (err) throw err;
//     console.log("saving");
//   }
// );

// fs.writeFile("newFileWritten.txt", "words are being saved!", function (err) {
//   if (err) throw err;
//   console.log("this works");
// });

// fs.appendFile(
//   "newFile.txt",
//   " ...add this to the file in a second append",
//   function (err) {
//     if (err) throw err;
//     console.log("updated with more text");
//   }
// );

fs.writeFile(
  "overwrittenFile.txt",
  "overwritten what was here, this is new text",
  function (err) {
    if (err) throw err;
    console.log("changed text");
  }
);
