
const express = require('express');
const cors = require('cors');

const bookRouter = require('./routes/bookRouter');

//instatiation
const app = express();

//configuration



//middleware
app.use(cors());
app.use(express.json());
app.use('/books', bookRouter);



//startup
app.listen(3005);
