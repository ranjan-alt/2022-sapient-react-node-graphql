// ============================================================
// to do file operation

const fs = require("fs");
// fs.rename("sample.txt", "new-sample.txt", (err) => {
//   if (err) {
//     console.log("sorry file not found");
//   } else {
//     console.log("rename successfully done");
//   }
// });
// ===========================================================

//appending the file

// fs.appendFile("sample.txt", "this is new content", (err) => {
//   if (err) {
//     console.log("appending not done ");
//   } else {
//     console.log("file updated successfully");
//   }
// });

// =================================================================

// delete the file

fs.unlink("new-sample.txt", (err) => {
  if (err) {
    console.log("file not found to delet");
  } else {
    console.log("file deleted");
  }
});
