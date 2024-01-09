const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const PORT = 8000

const userRouter = require('./routes/user.route')
const bookRouter = require('./routes/book.route')

app.use(bodyParser({extended: true}));

app.use("/auth", userRouter);
app.use("/books", bookRouter);

mongoose.connect('mongodb+srv://admin-rohit:test123@cluster0-exv7e.mongodb.net/outscale')

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))