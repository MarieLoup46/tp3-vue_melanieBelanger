const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
    origin: 'http://localhost:8081'
}
app.use(cors(corsOption))

// Models
const db = require('./app/models')

// Sequelize
db.connex.sync()

// relié à l'ajout d'un nouveau produit
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//test
app.get('/', (req, res) => {
    res.json({message:'Welcome'})
})

// routes
require('./app/routes/product.route')(app)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})