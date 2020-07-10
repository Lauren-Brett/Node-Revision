let fs = require("fs");

fs.appendFile(
  "newFile.txt",
  "This is the new content that now shows in the new file",
  function (err) {
    if (err) throw err;
    console.log("text in file saved");
  }
);

fs.writeFile("newFileWritten.txt", "words are being saved!", function (err) {
  if (err) throw err;
  console.log("new file created with text and saved");
});

fs.appendFile(
  "newFile.txt",
  " ...add this to the file in a second append",
  function (err) {
    if (err) throw err;
    console.log("update file with more text");
  }
);

fs.writeFile(
  "overwrittenFile.txt",
  "overwritten what was here, this is new text",
  function (err) {
    if (err) throw err;
    console.log("changed text");
  }
);

fs.unlink("fileDeleted.txt", function (err) {
  if (err) throw err;
  console.log("file gone");
});

fs.rename("renameFile.txt", "nameChangedFile.txt", function (err) {
  if (err) throw err;
  console.log("file name changed, old file deleted, new file made");
});
