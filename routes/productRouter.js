const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../services/productService');
const { checkId } = require('./helper/index')

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', checkId, getProductById);
router.put('/:id', checkId, updateProduct);
router.delete('/:id', checkId, deleteProduct);

module.exports = router;
