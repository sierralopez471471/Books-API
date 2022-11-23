//DEPENDENCIES
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

//CONFIGURATIONS
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to: ', process.env.MONGO_URI)}
)

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
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