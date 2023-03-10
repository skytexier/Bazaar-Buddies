const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating product schema 
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//building schemas and models -SHT