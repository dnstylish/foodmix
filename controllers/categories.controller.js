const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
    const category = await categoryService.createCategory(req.body);
    res.status(httpStatus.CREATED).send(category);
});

const getCategories = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await categoryService.queryCategories(filter, options);
    res.send(result);
});

const getCategory = catchAsync(async (req, res) => {
    const category = await categoryService.getCategory(req.params.slug);
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    }
    res.send(category);
});

const updateCategory = catchAsync(async (req, res) => {
    const category = await categoryService.updateCategory(req.params.slug, req.body);
    res.send(category);
});

const deleteCategory = catchAsync(async (req, res) => {
    await categoryService.deleteCategory(req.params.slug);
    res.status(httpStatus.ACCEPTED).send({ Success: true });
});


module.exports = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
};