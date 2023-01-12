const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
}
`;

module.exports = typeDefs;

// typeDefs set up (SHT)