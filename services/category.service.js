const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * 
 * @param {Object} category 
 * @returns {Promise<Categories>}
 */
const createCategory = async (category) => {
    return Category.create(category);
};

/**
 * 
 * @param {Object} filter 
 * @param {Object} options 
 * @returns {Promise<QueryResult>}
 */
const queryCategories = async (filter, options) => {
    const categories = await Category.paginate(filter, options);
    return categories;
};

/**
 * 
 * @param {ObjectId} id 
 * @returns {Promise<Categories>}
 */
const getCategory = async (value) => {
    return Category.findOne({ slug: value })
};

/**
 * 
 * @param {ObjectId} id 
 * @param {Object} updateBody 
 * @returns 
 */
const updateCategory = async (value, updateBody) => {
    const category = await getCategory(value);
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    }
    Object.assign(category, updateBody);
    await category.save();
    return category;

    // const category = await Category.findOneAndUpdate({ slug: value }, updateBody, { new: true });
};

/**
 * 
 * @param {ObjectId} id 
 * @returns 
 */
const deleteCategory = async (value) => {
    const category = await Category.findOneAndDelete({ slug: value });
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    };
    return category;
};

module.exports = {
    createCategory,
    queryCategories,
    getCategory,
    updateCategory,
    deleteCategory
};
