const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    year: {
        type: Number
    },
    pages: {
        type: Number
    },
    isbn: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('book', BookSchema);