const { User, Product, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')
const mongoose = require('mongoose')

//creating resolvers for the models
const resolvers = {
    Query: {
        me: async (parent, args, context, info) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id}).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('You are not logged in!');
        },

        categories: async (parent, args, context, info) => {
            return await Category.find()
        },

        products: async (parent, {category}, context, info) => {
            const params = {};

            if (category) {
                params.category = category;
            }
            return await Product.find().populate('category')
        },

        product: async (parent, args, context, info) => {
            const { _id } = args;
            return await Product.findById(_id);
        },
    },

    Mutation: {
        // User Mutations
        addUser: async (parent, {name, email, password}, context, info) => {
            const newuser = await User.create({name, email, password});
            return newuser.save().then(user => {
                const token = signToken(user);
                return { token, user: {_id: user.id, name: user.name} };
            })
        },

        // Update User mutation, findbyID and update based upon context from client
        updateUser: async (parent, args, context, info) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('You must be logged in to update a user')
        },
        
        // Delete user by id, passing in args from our client side query
        deleteUser: async (parent, args, context, info) => {
            if (context.user) {
                const deletedUser = await User.findByIdAndDelete(args.id);

                if(!deletedUser) throw new Error("User not found");
                return false;
            }
            throw new AuthenticationError('You must be logged in to delete your account')
        },
        
        // Login mutation accepting email and password args from client side form
        login: async (parent, args, context, info) => {
            const user = await User.findOne({ email: args.email });

            if (!user) {
                throw new AuthenticationError('Wrong email!');
            }
            else {
                const correctPass = await user.isCorrectPassword(args.password);

                if (!correctPass) {
                    throw new AuthenticationError('Wrong password!');
                }
                else{
                    const token = signToken(user);
                    return { token, user};
                }
            }
        },

        // Product mutations
        createProduct: async (_, { input }, { user }) => {
            try {
                console.log(user)
                if (!user) {
                    throw new Error("User not found");
                }
                const newProduct = await Product.create({
                    name: input.name,
                    description: input.description,
                    image: input.image,
                    price: input.price,
                    category: mongoose.Types.ObjectId(input.category),
                    user: mongoose.Types.ObjectId(user._id)
                });
                return newProduct;
            } catch (error) {
                throw new Error(error);
            }
        },
        
        updateProduct: async (parent, args, context, info) => {
            const updatedProduct = await Product.findByIdAndUpdate(args._id, args, { new: true });
            if (!updatedProduct) throw new Error("Product not found");
            return updatedProduct;
        },
        deleteProduct: async (parent, args, context, info) => {
            const deletedProduct = await Product.findByIdAndDelete(args._id);
            if (!deletedProduct) throw new Error("Product not found");
            return true;
      },
    }
}

module.exports = resolvers;

//resolvers set up (SHT)