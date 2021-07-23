const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let thaiGroceries = {
	'thai coconut milk': {
		brand: 'chaokoh',
		info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
		ingredients:
			'coconut extract, water, citric acid (as antioxidant), sodium metabisulfite (as perservative). Unsweetened.',
		size: '13.5 oz',
		weight: '13.5 Ounces',
		price: '3.50',
	},
	'green curry paste': {
		brand: 'maesri',
		info: 'Maesri Brand is recognized in Thailand as a high quality export product with rich taste and authentic flavor.',
		ingredients:
			'Fresh Chilli Pepper, Garlic, Chinese Ginger, Shallot, Lemongrass, Salt, Sweet Basil, Kaffir Lime, Sugar, Spices (Coriander Seeds, Pepper, Cumin, Cardamom, Turmeric), Galangal, Fresh Coriander.',
		size: '14 oz',
		weight: '7.7 oz',
		price: '3.99',
	},
	'tom yum soup': {
		brand: 'aroy',
		info: 'This tom yum soup is made with an authentic, Thai Taste, a strong blend of both sour and spicy. It is restaurant quality.',
		ingredients:
			'Lemongrass (24%), Refined Soybean Oil, Shallot, Sugar, Tamarind Paste, Dried Red Chilli, Galangal, Garlic, Salt, Acidity Regulator (Citric Acid (E330)), Fish Sauce (Anchovy, Salt, Water), Flavour Enhancer (Monosodium Glutamate (E621)), Shrimp Powder, Kaffir Lime Peel.',
		size: '14 oz',
		weight: '13.5 Ounces',
		price: '5.39',
	},
	'red crry soup': {
		brand: 'maeSri',
		info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
		ingredients:
			'Thai curry soup packed with the essence of turmeric, lemongrass, curry powder, bay leaves, and other herbs and spices. Karee curry is influenced by Indian merchants that traveled to Thailand hundreds of years ago.',
		size: '14 oz',
		weight: '7.7 oz',
		price: '3.99',
	},
	unknown: {
		brand: 'unknown',
		info: 'unknown',
		ingredients: 'unknown',
		size: 'unknown',
		weight: 'unknown',
		price: 'unknown',
	},
}

// Response to locallhost 8000
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

// Response to the other route
app.get(
	'/api/thai-grocery-product/:thaiGroceriesItemName',
	(request, response) => {
		const thaiGroceriesItem = request.params.thaiGroceriesItemName.toLowerCase()
		if (thaiGroceries[thaiGroceriesItem]) {
			response.json(thaiGroceries[thaiGroceriesItem])
		} else {
			response.json(thaiGroceries['unknown'])
		}
		response.json(thaiGroceries[thaiGroceriesItem])
	}
)

app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`)
})
// app.get('/api/thai-grocery-marketplace', (request, response) => {
//     response.json
// })
