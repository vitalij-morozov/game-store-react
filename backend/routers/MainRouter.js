const express = require('express');
const router = express.Router();

const { addNewProduct, getAllProducts, getProductById } = require('../controllers/ProductController');

router.post('/add-product', addNewProduct);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

module.exports = router;
