const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const { paginate } = require('./plugins');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true,
        lowercase: true,
        index: true
    },
    avatar: {
        type: String,
        default: 'https://i.imgur.com/pqGLgGr.jpg'
    },
    content: String,
})

CategorySchema.plugin(slug)
CategorySchema.plugin(paginate);

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category
