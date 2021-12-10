"use strict";

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
    productSource: 'brand chaokoh',
    buyProduct: 'https://www.amazon.com/Chaokoh-Coconut-Milk-13-5-Ounce/dp/B00G9Y9MC8/ref=sr_1_19?keywords=Thai+Coconut+Milk&qid=1639156398&sr=8-19',
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
    productSource: 'brand maesri',
    buyProduct: 'https://www.amazon.com/Maesri-Green-Curry-Paste-14oz/dp/B007MOYXOG/ref=sr_1_22?keywords=Green+Curry+Paste&qid=1639156681&sr=8-22',
    size: '14 oz',
    weight: '7.7 oz',
    price: '8.46'
  },
  'tom yum soup': {
    product: 'tom yum soup',
    brand: 'aroy',
    info: 'This tom yum soup is made with an authentic, Thai Taste, a strong blend of both sour and spicy. It is restaurant quality.',
    ingredients: 'Lemongrass (24%), Refined Soybean Oil, Shallot, Sugar, Tamarind Paste, Dried Red Chilli, Galangal, Garlic, Salt, Acidity Regulator (Citric Acid (E330)), Fish Sauce (Anchovy, Salt, Water), Flavour Enhancer (Monosodium Glutamate (E621)), Shrimp Powder, Kaffir Lime Peel.',
    image: 'https://m.media-amazon.com/images/I/81oAOVuswLL._SL1500_.jpg',
    productSource: 'brand aroy',
    buyProduct: 'https://www.amazon.com/Tom-Yum-Soup-14oz-Pack/dp/B01BNE3MZQ/ref=sr_1_3?keywords=Tom+Yum+Soup+Brand%3A+Aroy+14+oz&qid=1639157058&sr=8-3',
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
    productSource: 'brand maeSri',
    buyProduct: 'https://www.amazon.com/Maesri-Red-Curry-Paste-14oz/dp/B007MOTZN0/ref=sr_1_13?keywords=Red+Curry+Soup&qid=1639157397&sr=8-13',
    size: '14 oz',
    weight: '7.7 oz',
    price: '8.46'
  },
  'koh kae peanut snack coconut flavor': {
    product: 'koh kae peanut snack coconut flavor',
    brand: 'Koh Kae',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: ' Original Coconut Flavor: peanuts, wheat flour, sugar, coconut oil, iodized salt, coconut cream, sweetened condensed creamer, rising agent ammonium bicarbonate, sweetener (acesulfame potassium).',
    image: 'https://importfood.com/media/zoo/images/koh-kae-orig-large_ed2bcb022f9cb4fe45486804f4ac24fb.jpg',
    productSource: 'ImportFood Thai Supermarket',
    buyProduct: 'https://importfood.com/products/assorted-thai-grocery/item/koh-kae-peanut-snack',
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
    productSource: 'ImportFood Thai Supermarket',
    buyProduct: 'https://importfood.com/products/thai-sauces-condiments/item/thai-sweet-chilli-sauce-mae-ploy',
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
    productSource: 'ImportFood Thai Supermarket',
    buyProduct: 'https://importfood.com/products/thai-sauces-condiments/item/soy-sauce-thin-light-healthy-boy-10-oz',
    size: '13.5 oz',
    weight: '10 oz',
    price: '5.29'
  },
  'sriracha sauce': {
    product: 'sriracha sauce',
    brand: 'Huy Fong',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Chile, sugar, garlic, salt, distilled vinegar, potassium sorbate and sodium bisulfite as preservatives, and xanthan gum.',
    image: 'https://importfood.com/media/zoo/images/sriracha-huy-fong-large_3c11d8fcd39a218072394db060cdbbcc.jpg',
    productSource: 'ImportFood Thai Supermarket',
    buyProduct: 'https://importfood.com/index.php?option=com_zoo&task=item&item_id=2734&Itemid=189',
    size: '13.5 oz',
    weight: '17 oz',
    price: '4.29'
  },
  'mushroom soy sauce': {
    product: 'mushroom soy sauce',
    brand: 'Healthy Boy',
    info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
    ingredients: 'Soybean, mushroom, salt water, wheat flour, sugar, sodium benzoate 0.1% as preservative.',
    image: 'https://importfood.com/media/zoo/images/mushroom-soy-sauce-healthy-boy_6bcc65e09468500f3eb98a8c0562fb04.jpg',
    productSource: 'Brand: Chaokoh',
    buyProduct: 'https://importfood.com/products/thai-sauces-condiments/item/mushroom-soy-sauce-healthy-boy',
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
    productSource: 'unknown',
    buyProduct: 'unknown',
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