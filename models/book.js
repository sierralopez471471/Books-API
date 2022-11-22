const mongoose = require('mongoose')
const { Schema } = mongoose

//Schema
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

module.exports = mongoose.model('Book', bookSchema)