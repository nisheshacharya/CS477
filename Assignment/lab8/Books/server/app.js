const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');


const bookRouter = require('./routes/booksRouter');
const categoryRouter = require('./routes/categoryRouter');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');


const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use("/users", userRouter);

app.use("/books", bookRouter);
app.use("/categories", categoryRouter);


app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
})



mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
    .then(() => {
        app.listen(3001, () => console.log('listening to 3001...'));
    })

