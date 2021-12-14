const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

let thaiGroceries = require('./api')

const kebabCase = require('lodash.kebabcase')
app.use(cors())

const groceryStore = {}

// Using the kebabCase
Object.keys(thaiGroceries).forEach((product) => {
	groceryStore[kebabCase(product)] = {
		...thaiGroceries[product],
	}
})

// Response to locallhost 8000
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

// Response to the other route
app.get(
	'/api/thai-grocery-product/:thaiGroceriesItemName',
	(request, response) => {
		const thaiGroceriesItem = request.params.thaiGroceriesItemName
		if (!groceryStore[thaiGroceriesItem]) {
			return response.json(groceryStore['unknown'])
		}

		return response.json(groceryStore[thaiGroceriesItem])
	}
)

// All Thai Groceries
app.get('/api/thai-grocery-product', (request, response) => {
	return response.json(groceryStore)
})

// process.env.PORT for Heroku
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server is running ${PORT}`)
})
