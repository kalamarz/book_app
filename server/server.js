const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const bookRoutes = express.Router();
let Book = require('./models/book.model');

app.use(bodyParser.json());
const db = 'mongodb://localhost/books';

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MangoDB Connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

bookRoutes.route('/').get((req, res) => {
    Book.find((err, books) => {
        err? console.log(err) : res.json(books)
    });
});

bookRoutes.route(':/id').get((req, res) => {
    let id = req.params.id;
    Book.findById(id, (err, book) => {
        res.json(book);
    });
});

bookRoutes.route('/add').post((req, res) => {
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({ 'book': 'book added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new book failed')
        });
});

bookRoutes.route('/edit/:id').post((req, res) => {
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

app.use('/books', bookRoutes);