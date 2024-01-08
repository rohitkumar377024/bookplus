const router = require("express").Router();

router.post('/publish', (req, res) => res.send('book publish'))
router.get('/search', (req, res) => res.send('book search by title'))
router.put('/unpublish/:bookId', (req, res) => res.send('book unpublish'))
router.get('/user', (req, res) => res.send('get books list published by current user'))
router.get('/published', (req, res) => res.send('book publish'))

module.exports = router;