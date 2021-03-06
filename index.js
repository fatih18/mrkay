// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// var path = require('path');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(path.resolve('./index.html'));

// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

const port = 8085;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
