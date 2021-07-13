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






const express = require('express')
const app = express()
const port = 8880 

 

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
  });

  app.use(express.static(__dirname));

app.listen(8880,"192.168.56.1", () => {
  console.log(`Example app listening at https://localhost:${port}`)
})