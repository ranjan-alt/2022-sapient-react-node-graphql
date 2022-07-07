//require
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//variables
const app = express();
const port = 3000;

//configuration
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));

//alias for static content

app.use("/public", express.static(path.join(__dirname, "static")));

// we can create the routes

app.get("/", (req, res) => {
  console.log("this is messae");
  res.send("welcome to express js ");
});

app.get("/example", (req, res) => {
  res.send("this is example");
});
app.get("/he**p", (req, res) => {
  res.send("this is heep");
});
// 1. path name - http://localhost:3000/example/101/ranjan
//2. query param - http://localhost:3000/example?empid=100&name=ranjan
app.get("/example/:empid/:empname", (req, res) => {
  let empObj = {
    empid: req.params.empid,
    empname: req.params.empname,
  };
  console.log(`Data sent is ${empObj.empid} ${empObj.empname}`);
  res.send(`Data sent is ${empObj.empid} ${empObj.empname}`);

  //query params
  console.log(req.query);
  console.log(req.query.order);
});
app.post("/example", (req, res) => {
  let empObj = req.body;
  console.log(req.body);
  console.log("Emp Id", empObj.empid);
  console.log("empName", empObj.empname);
});

// when user make get request for form
app.get("/form", (rerq, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

//idea of first handler
//when we hit this route it can call a function

let firstHandler = function (req, res) {
  console.log("hi i am first handler");
};

app.get("/example-route", [firstHandler]);

app.listen(3000, () => {
  console.log(`server started at ${port}`);
});
