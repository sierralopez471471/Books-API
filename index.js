require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Home')
})

app.get('*', (req, res) {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)