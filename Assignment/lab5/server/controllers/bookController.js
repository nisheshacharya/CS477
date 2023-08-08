const Book = require('../models/book');

exports.fetchAll = (req, res, next) => {
    res.status(200).json(Book.getAll());
};

exports.fetchById = (req, res, next) => {
    res.json(Book.getById(req.params.id));
}