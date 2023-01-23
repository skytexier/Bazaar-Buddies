const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String
}

type Product {
    _id: ID!
    name: String!
    description: String
    image: String
    price: String!
    category: Category!
    user: User
}

type User {
    _id: ID
    name: String!
    email: String!
    posts: [Product]
}

type Query {
    categories: [Category]
    products: [Product]
    product(_id: ID): [Product]
    me: User
}

type Auth {
    token: String!
    user: User
}

input CreateProductInput {
    name: String!
    description: String
    image: String
    price: String!
    category: ID!
    user: ID
  }


type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): User
    deleteUser(id: ID!): Boolean
    createProduct(input: CreateProductInput): Product
    updateProduct(_id: ID!, name: String, description: String, image: String, price: String!, category: String): Product
    deleteProduct(_id: ID!): Boolean
}
`;

module.exports = typeDefs;

// typeDefs set up (SHT)