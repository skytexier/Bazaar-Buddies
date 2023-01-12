const { User, Products, Category } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
    }
}

module.exports = resolvers;

//resolvers set up (SHT)