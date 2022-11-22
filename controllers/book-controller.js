const express = require('express')
const { db } = require('../models/book.js')
const book = require('../models/book.js')
const Book = require('../models/book.js')
const books = express.Router()

//ROUTES
books.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
        res.render('books/index', { books })
    })
    .catch(err => {
        console.log(err)
        res.status(404).render('error404')
    })
})

books.get('/:id', (req, res) => {
    db.Book.findById(req.params.id)
    .then((books) => {
        res.render('books/:id', { books })
    })
    .catch(err => {
        console.log(err)
        res.status(404).render('error404')
    })
})


module.exports = books