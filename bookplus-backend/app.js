const express = require('express')
const app = express()

const PORT = 8000

const userRouter = require('./routes/user.route')
const bookRouter = require('./routes/book.route')

app.use("/auth", userRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))