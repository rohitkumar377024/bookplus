const Book = require('../models/book.model')

exports.publishBook = async (req, res) => {
    const { title, content, genre, userID } = req?.body;

    const result = await new Book({
        title,
        content,
        genre,
        userID,
        isPublished: true
      }).save();

      res.status(201).json({ message: 'Book published successfully', data: result })
}

exports.searchBook = async (req, res) => {
    const { title } = req?.query;

    const result = await Book.find({ title: { $regex: new RegExp(title, "i") } })

    res.status(200).json({ message: 'Found books successfully', data: result })
}

exports.unpublishBook = async (req, res) => {
    const bookId = req.params.bookId
    
    const result = await Book.updateOne({ _id: bookId }, { isPublished: false})

    res.status(200).json({ message: 'Book unpublished successfully', data: {} })
}

exports.getUserPublishedBooks = async (req, res) => {
    const { userID } = req?.query;

    const result = await Book.find({ userID, isPublished: true })

    res.status(200).json({ message: 'Found published books successfully', data: result })
}

exports.getAllPublishedBooks = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const size = parseInt(req.query.size) || 10;

    const skip = (page - 1) * size;

    const result = await Book.find({ isPublished: true })
        .skip(skip)
        .limit(size);

    const totalBooks = await Book.countDocuments({ isPublished: true });

    const totalPages = Math.ceil(totalBooks / size);

    res.status(200).json({
        message: 'Found all published books successfully',
        data: result,
        pageInfo: {
            currentPage: page,
            totalPages: totalPages,
            pageSize: size,
            totalItems: totalBooks,
        },
    });
    // const result = await Book.find({ isPublished: true })

    // res.status(200).json({ message: 'Found all published books successfully', data: result})
}