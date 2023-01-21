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

type User {
    _id: ID
    username: String!
    email: String
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;

// typeDefs set up (SHT)