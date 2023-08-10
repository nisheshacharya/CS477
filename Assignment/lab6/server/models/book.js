const{MongoClient} = require('mongodb');
const {getDb} = require('../utils/database');

let books = [
    {id: 1, title: 'Abc', isbn: 1234567890, publishedDate: '1997', author: 'Zyx'},
    {id: 2, title: 'Bdc', isbn: 1234567876, publishedDate: '2009', author: 'Yxw'},
    {id: 3, title: 'Cde', isbn: 1234567891, publishedDate: '2022',  author: 'Xwv'}
];

const client = new MongoClient('mongodb://127.0.0.1:27017')

module.exports = class Book {

    constructor(id, title, isbn, author, publishedDate){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        const db = getDb();
        const collection = db.collection('books');
        return collection.find().toArray();
    }

     static getById(id){
        return products.find(book => book.id == id);
    }

    save(){
        if(products.find(book => book.id == this.id)){
            throw new Error(`Book with Id ${this.id} already exists`);
        } else {
            products.push(this);
        }
        return this;
    }

    update(){
        const index = books.findIndex(book => book.id == this.id);
        if(index > -1){
            books[index] = this;
        } else {
            throw new Error(`cannot find book with Id ${this.id}`);
        }
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id == id);
        if(index > -1){
            books.splice(index, 1);
        } else {
            throw new Error(`cannot find book with Id ${id}`);
        }
    }
}