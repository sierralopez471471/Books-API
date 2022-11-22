//DEPENDENCIES
const mongoose = require('mongoose')
const express = require('express')
const methodOverride = require('method-override')

//CONFIGURATIONS
const app = express()
// require('dotenv').config()

//MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI)}
)

//MIDDLEWARE
app.use(express.json())
app.use('/books', require('./controllers/book-controller'))

//ROUTES
app.get('/', function(req, res) {
    res.send('Home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)