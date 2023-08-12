const Book = require('../models/book');

exports.fetchAll = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};


exports.fetchById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ Error: 'No book found with id ' + req.params.id });
        }
    } catch (error) {
        console.error(error); // Pass the error to the error handling middleware
    }
};


exports.save = async (req, res, next) => {
    try {
        const saveBook = new Book(req.body).save();
        res.json(saveBook);
    }
    catch (error) {
    console.error(error)
}
}

exports.update = async (req, res, next) => {
    try{
    const updateBook = await (Book.updateOne({ _id: req.params.id }, req.body))
    res.json(updateBook)
    }
    catch(error){
        console.error(error)
    }

}

exports.deleteById = async (req, res, next) => {
    try{
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deleteBook)
    }
    catch(error){
        console.error(error)

    }
}