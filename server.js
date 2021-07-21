const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let thaiGroceries = {
	'Thai coconut milk, Chaokoh brand': {
		brand: 'Chaokoh',
		info: 'PREMIUM QUALITY COCONUTS - Our creamy coconut milk is extracted from the pulp of mature coconuts which are ethically sourced from sustainable growers and have passed strict quality control inspections to ensure high quality.',
		ingredients:
			'coconut extract, water, citric acid (as antioxidant), sodium metabisulfite (as perservative). Unsweetened.',
		size: '13.5 oz',
		weight: '13.5 Ounces',
		price: '3.50',
	},
	'Maesri Green Curry Paste': {
		brand: 'Maesri',
		info: 'Maesri Brand is recognized in Thailand as a high quality export product with rich taste and authentic flavor.',
		ingredients:
			'Fresh Chilli Pepper, Garlic, Chinese Ginger, Shallot, Lemongrass, Salt, Sweet Basil, Kaffir Lime, Sugar, Spices (Coriander Seeds, Pepper, Cumin, Cardamom, Turmeric), Galangal, Fresh Coriander.',
		size: '14 oz',
		weight: '7.7 oz',
		price: '3.99',
	},
}

// Response to locallhost 8000
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

// Response to the other route
app.get('/api/thai-grocery-product', (request, response) => {
	response.json(thaiGroceries)
})

app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`)
})
// app.get('/api/thai-grocery-marketplace', (request, response) => {
//     response.json
// })
