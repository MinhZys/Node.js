const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.list);
router.get('/add', ProductController.showAddForm);
router.post('/add', ProductController.add);
router.get('/edit/:id', ProductController.showEditForm);
router.post('/edit/:id', ProductController.edit);
router.get('/delete/:id', ProductController.del);

module.exports = router;
