const { User, Product, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id}).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('You are logged in!');
        },

        categories: async (parent, args, context) => {
            return await Category.find()
        },

        products: async (parent, args, context) => {
            return await Product.find()
        },

        product: async (parent, args, context) => {
            const { _id } = args;
            return await Product.findById(_id);
        },
    },

    Mutation: {
        register: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('You must be logged in to update a user')
        },

        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Wrong email!');
            }

            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Wrong password!');
            }

            const token = signToken(user);
            return { token, user};
        }
    }

    }

module.exports = resolvers;

//resolvers set up (SHT)