const express = require('express')
const categoryController = require('../controllers/categories.controller')

const router = express.Router()

router.route('/').post(categoryController.createCategory).get(categoryController.getCategories);

router
    .route('/:slug')
    .get(categoryController.getCategory)
    .patch(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);


module.exports = router