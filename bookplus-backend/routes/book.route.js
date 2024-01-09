const router = require("express").Router();
const bookController = require('../controllers/book.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/publish', authMiddleware, bookController.publishBook)
router.get('/search', authMiddleware, bookController.searchBook)
router.put('/unpublish/:bookId', authMiddleware, bookController.unpublishBook)
router.get('/user', authMiddleware, bookController.getUserPublishedBooks)
router.get('/published', authMiddleware, bookController.getAllPublishedBooks)

module.exports = router;