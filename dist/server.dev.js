"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var PORT = 8000; // Response to locallhost 8000

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
}); // Response to the other route

app.get('/api/thai-grocery-product', function (request, response) {});
app.listen(PORT, function () {
  console.log("Server is running ".concat(PORT));
}); // app.get('/api/thai-grocery-marketplace', (request, response) => {
//     response.json
// })