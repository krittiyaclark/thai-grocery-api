"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();

var cors = require('cors');

var PORT = 8000;

var thaiGroceries = require('./api');

var kebabCase = require('lodash.kebabcase');

app.use(cors());
var groceryStore = {}; // Using the kebabCase

Object.keys(thaiGroceries).forEach(function (product) {
  groceryStore[kebabCase(product)] = _objectSpread({}, thaiGroceries[product]);
}); // Response to locallhost 8000

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
}); // Response to the other route

app.get('/api/thai-grocery-product/:thaiGroceriesItemName', function (request, response) {
  var thaiGroceriesItem = request.params.thaiGroceriesItemName;

  if (!groceryStore[thaiGroceriesItem]) {
    return response.json(groceryStore['unknown']);
  }

  return response.json(groceryStore[thaiGroceriesItem]);
}); // All Thai Groceries

app.get('/api/thai-grocery-product', function (request, response) {
  return response.json(groceryStore);
}); // process.env.PORT for Heroku

app.listen(process.env.PORT || PORT, function () {
  console.log("Server is running ".concat(PORT));
});