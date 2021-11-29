"use strict";

var _srirachaSauce;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();

var cors = require('cors');

var PORT = 8000;

var kebabCase = require('lodash.kebabcase');

app.use(cors());
var thaiGroceries = {
  'thai coconut milk': {
    product: 'thai coconut milk',
    brand: 'chaokoh',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'coconut extract, water, citric acid (as antioxidant), sodium metabisulfite (as perservative). Unsweetened.',
    image: 'https://m.media-amazon.com/images/I/91b8GD56iaL._SL1500_.jpg',
    imageCredit: 'Brand: Chaokoh',
    size: '13.5 oz',
    weight: '13.5 Ounces',
    price: '3.50'
  },
  'green curry paste': {
    product: 'green curry paste',
    brand: 'maesri',
    info: 'Maesri Brand is recognized in Thailand as a high quality export product with rich taste and authentic flavor.',
    ingredients: 'Fresh Chilli Pepper, Garlic, Chinese Ginger, Shallot, Lemongrass, Salt, Sweet Basil, Kaffir Lime, Sugar, Spices (Coriander Seeds, Pepper, Cumin, Cardamom, Turmeric), Galangal, Fresh Coriander.',
    image: 'https://m.media-amazon.com/images/I/71puhEVfWyL._SL1000_.jpg',
    imageCredit: 'Brand: Maesri',
    size: '14 oz',
    weight: '7.7 oz',
    price: '3.99'
  },
  'tom yum soup': {
    product: 'tom yum soup',
    brand: 'aroy',
    info: 'This tom yum soup is made with an authentic, Thai Taste, a strong blend of both sour and spicy. It is restaurant quality.',
    ingredients: 'Lemongrass (24%), Refined Soybean Oil, Shallot, Sugar, Tamarind Paste, Dried Red Chilli, Galangal, Garlic, Salt, Acidity Regulator (Citric Acid (E330)), Fish Sauce (Anchovy, Salt, Water), Flavour Enhancer (Monosodium Glutamate (E621)), Shrimp Powder, Kaffir Lime Peel.',
    image: 'https://m.media-amazon.com/images/I/81oAOVuswLL._SL1500_.jpg',
    imageCreadit: 'Brand: Aroy-D',
    size: '14 oz',
    weight: '13.5 Ounces',
    price: '5.39'
  },
  'red curry soup': {
    product: 'red curry soup',
    brand: 'maeSri',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Thai curry soup packed with the essence of turmeric, lemongrass, curry powder, bay leaves, and other herbs and spices. Karee curry is influenced by Indian merchants that traveled to Thailand hundreds of years ago.',
    image: 'https://m.media-amazon.com/images/I/61Q2qxgRtKL._SL1075_.jpg',
    imageCreadit: 'Brand: Maesri',
    size: '14 oz',
    weight: '7.7 oz',
    price: '3.99'
  },
  'koh kae peanut snack coconut flavor': {
    product: 'koh kae peanut snack coconut flavor',
    brand: 'Koh Kae',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: ' Original Coconut Flavor: peanuts, wheat flour, sugar, coconut oil, iodized salt, coconut cream, sweetened condensed creamer, rising agent ammonium bicarbonate, sweetener (acesulfame potassium).',
    image: 'https://importfood.com/media/zoo/images/koh-kae-orig-large_ed2bcb022f9cb4fe45486804f4ac24fb.jpg',
    imageCredit: 'ImportFood Thai Supermarket',
    size: '8.11oz',
    weight: '8.11 oz',
    price: '7.95'
  },
  'thai sweet chilli sauce': {
    product: 'thai sweet chilli sauce',
    brand: 'Mae Ploy',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Sugar, water, pickled red chilli, vinegar, garlic, salt, xanthan gum. No preservatives and no artificial coloring. Product of Thailand.',
    image: 'https://importfood.com/media/zoo/images/mae-ploy-sweet-chilli-large_5c70f1c60cfa0cac7934676612295401.jpg',
    imageCredit: 'ImportFood Thai Supermarket',
    size: '13.5 oz',
    weight: '10 oz',
    price: '4.40'
  },
  'soy sauce, thin light': {
    product: 'soy sauce, thin light',
    brand: 'Healthy Boy',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Soy bean, wheat, salt, sugar, msg, preservatives 0.1%, artificial color.',
    image: 'https://importfood.com/media/zoo/images/healthy-boy-thin-large_6df1cc2cfeb6b334df1f2809f5038d82.jpg',
    imageCredit: 'ImportFood Thai Supermarket',
    size: '13.5 oz',
    weight: '10 oz',
    price: '5.29'
  },
  'sriracha sauce': (_srirachaSauce = {
    product: 'sriracha sauce',
    brand: 'Huy Fong',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Chile, sugar, garlic, salt, distilled vinegar, potassium sorbate and sodium bisulfite as preservatives, and xanthan gum.',
    image: 'https://importfood.com/media/zoo/images/sriracha-huy-fong-large_3c11d8fcd39a218072394db060cdbbcc.jpg',
    imageCredit: 'ImportFood Thai Supermarket'
  }, _defineProperty(_srirachaSauce, "imageCredit", 'Brand: Chaokoh'), _defineProperty(_srirachaSauce, "size", '13.5 oz'), _defineProperty(_srirachaSauce, "weight", '17 oz'), _defineProperty(_srirachaSauce, "price", '4.29'), _srirachaSauce),
  'mushroom soy sauce': {
    product: 'mushroom soy sauce',
    brand: 'Healthy Boy',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Soybean, mushroom, salt water, wheat flour, sugar, sodium benzoate 0.1% as preservative.',
    image: 'https://m.media-amazon.com/images/I/91b8GD56iaL._SL1500_.jpg',
    imageCredit: 'Brand: Chaokoh',
    size: '13.5 oz',
    weight: '23.5 oz',
    price: '9.89'
  },
  unknown: {
    product: 'unknown',
    brand: 'unknown',
    info: 'unknown',
    ingredients: 'unknown',
    image: 'unknown',
    imageCreadit: 'unknown',
    size: 'unknown',
    weight: 'unknown',
    price: 'unknown'
  }
};
var groceryStore = {}; // Using the kebabCase

Object.keys(thaiGroceries).forEach(function (product) {
  groceryStore[kebabCase(product)] = _objectSpread({}, thaiGroceries[product]);
}); // Response to locallhost 8000

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
}); // Response to the other route

app.get('/api/thai-grocery-product/:thaiGroceriesItemName', function (request, response) {
  var thaiGroceriesItem = request.params.thaiGroceriesItemName.toLowerCase();

  if (thaiGroceries[thaiGroceriesItem]) {
    response.json(thaiGroceries[thaiGroceriesItem]);
  } else {
    response.json(thaiGroceries['unknown']);
  }

  response.json(thaiGroceries[thaiGroceriesItem]);
}); // All Thai Groceries

app.get('/api/thai-grocery-product', function (request, response) {
  response.json(thaiGroceries);
}); // process.env.PORT for Heroku

app.listen(process.env.PORT || PORT, function () {
  console.log("Server is running ".concat(PORT));
});