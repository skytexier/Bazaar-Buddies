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
    name: String!
    email: String!
}

type Query {
    categories: [Category]
    products: [Product]
    product(_id: ID): [Product]
    me: User
}

type Auth {
    token: ID
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): User
}
`;

module.exports = typeDefs;

// typeDefs set up (SHT)