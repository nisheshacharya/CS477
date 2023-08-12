
const express = require('express');
const mongoose = require('mongoose');

  

const bookRouter = require('./routes/bookRouter');

//instatiation
const app = express();



//middleware
app.use(express.json());
app.use('/books', bookRouter);

//startup

mongoose.connect('mongodb://localhost:27017/ourBookStore')
    .then(() => {
        app.listen(3005, () => console.log('listening on 3005'));
    });


