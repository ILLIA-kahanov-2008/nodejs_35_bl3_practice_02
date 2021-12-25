const express = require('express')
const router = express.Router()
const { getBooks, getSingleBook, addBook, updateBook, removeBook } = require('../controllers')

// console.log('getBooks :>> ', getBooks);
router.get('/', getBooks)

router.get('/:id', getSingleBook)

router.post('/', addBook)

router.put('/:id', updateBook)

router.delete('/:id', removeBook)

module.exports = router