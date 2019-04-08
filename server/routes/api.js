const express = require ('express');
const bookRoutes = express.Router();
const Book = require('../models/book.model');

bookRoutes.route('/books').get((req, res) => {
    Book.find((err, books) => {
        err? console.log(err) : res.json(books)
    });
});

bookRoutes.route('/books/:id').get((req, res) => {
    let id = req.params.id;
    Book.findById(id, (err, book) => {
        res.json(book);
    });
});

bookRoutes.route('/books/add').post((req, res) => {
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({ 'book': 'book added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new book failed')
        });
});

bookRoutes.route('/books/edit/:id').post((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (!book)
            res.status(404).send('book is not found')
        else 
            book.title = req.body.title;
            book.author = req.body.author;
            book.genre = req.body.genre;
            book.year = req.body.year;
            book.pages = req.body.pages;
            book.isbn = req.body.isbn;

            book.save().then(book => {
                res.json('Book updated')
            }).catch(err => res.status(400).send('Update not possible'));
    });
});

bookRoutes.route('/books/:id').delete((req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = bookRoutes;
