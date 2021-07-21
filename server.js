const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

// Response to locallhost 8000
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

// Response to the other route
app.get('/api/thai-grocery-product', (request, response) => {})

app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`)
})
// app.get('/api/thai-grocery-marketplace', (request, response) => {
//     response.json
// })
