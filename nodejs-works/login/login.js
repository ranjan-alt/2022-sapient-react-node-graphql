const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./home.html");
    res.writeHead(200, { "content-type": "text/html" });
    readStream.pipe(res);
  })
  .listen(3000);
