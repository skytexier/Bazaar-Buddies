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
    email: String!
    token: String!
    createdAt: String!
}

type RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
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
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
}
`;

module.exports = typeDefs;

// typeDefs set up (SHT)