//DEPENDENCIES
const mongoose = require('mongoose')
const express = require('express')

//CONFIGURATIONS
const PORT = process.env.PORT
const app = express()
require('dotenv').config()

//MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI)}
)

//MIDDLEWARE
app.use(express.json())
const booksController = require('./controllers/book-controller.js')
app.use('/books', booksController)

//ROUTES
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(PORT)