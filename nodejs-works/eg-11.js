// to work with HTTP module
const http = require("http");

const server = http.createServer((req, res) => {
  //by default it will hosy on root
  //   res.write("hi this is from Nodejs");
  //   res.end();

  if (req.url === "/") {
    res.write("hi this is from nodejs root");
    res.end();
  } else {
    res.write("hi this is from not js and not at root");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server started on 3000");
});
