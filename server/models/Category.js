const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

//building schemas and models -SHT