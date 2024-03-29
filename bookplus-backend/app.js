const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = 10000

const userRouter = require('./routes/user.route')
const bookRouter = require('./routes/book.route')

app.use(bodyParser({extended: true}));
app.use(cors(
    { 
        origin: "*", 
        credentials: true
    }
))

app.use("/api/auth", userRouter);
app.use("/api/books", bookRouter);

mongoose.connect(process?.env?.MONGO_ATLAS_SRV)

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))