const { Schema, model } = require("mongoose");

const BookSchema = Schema({
    title: {
        type: String,
        trim: true,
        require: true,
    },
    content: {
        type: String,
        trim: true,
        require: true,
    },
    genre: {
        type: String,
        trim: true,
        require: true,
    },
    userID: {
        // ID of the user who created this book
        type: String,
        trim: true,
        require: true,
    }, 
    isPublished: {
        type: Boolean,
        default: true,
    },
});

module.exports = model("book", BookSchema);
