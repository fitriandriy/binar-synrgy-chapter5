const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require('../services/bookService');
const { checkId } = require('./helper/index')

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', checkId, getBookById);
router.put('/:id', checkId, updateBook);
router.delete('/:id', checkId, deleteBook);

module.exports = router;
