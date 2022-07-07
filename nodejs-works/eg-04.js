//example to show working with file system
const fs = require("fs");

fs.writeFile("sample.txt", "this is a sample content", (err) => {
  if (err) {
    console.log("sorry writing not possible");
  } else {
    console.log("data written successsfully");
    fs.readFile("sample.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("error reading file");
      } else {
        console.log("------------content got is --------------");
        console.log(data);
      }
    });
  }
});
