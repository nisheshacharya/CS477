
const express = require('express');
const cors = require('cors');

const { createDB } = require('./utils/database');

const bookRouter = require('./routes/bookRouter');

//instatiation
const app = express();

//configuration


//middleware
app.use(cors());
app.use(express.json());
app.use('/books', bookRouter);

//startup
app.use((err, req, res, next) => {
    console.log(err.message, '-----------------------');
    res.status(500).json({ error: err.message });
});

createDB(() => {
    app.listen(3000, () => console.log('listening on 3000'));
 });


   