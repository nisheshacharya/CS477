const Book = require('../models/book');

exports.fetchAll = async (req, res, next) => {
    try {
        const books = await Book.getAll();
        res.status(200).json(books);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};


exports.fetchById = (req, res, next) => {
    res.json(Book.getById(req.params.id));

}
exports.save = (req, res, next) => {
    res.json(new Book(req.body.id, req.body.title, req.body.isbn, req.body.releaseRate, req.body.author).save());
}

exports.update = (req, res, next) => {
    new Book(req.body.id, req.body.title, req.body.isbn, req.body.releaseRate, req.body.author).update();
    res.status(204).end();
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(204).end();
}