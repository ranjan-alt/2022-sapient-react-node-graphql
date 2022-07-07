// read and write with stream

const fs = require("fs");

const readStream = fs.createReadStream("./sample.txt", "utf-8");
const writeStream = fs.createWriteStream("./sample.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("----" + chunk);
  writeStream.write(chunk);
});
