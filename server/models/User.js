const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const productSchema = require('./Product')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            allowNull:false,
            required: true,
        },
        posts: {
            type: Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        },
},
{
    toJSON: {
        virtuals: true,
    },
}
);

// Hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 11;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compareSync(password, this.password);
};




const User = mongoose.model('User', userSchema)

module.exports = User;

//built User model -JL