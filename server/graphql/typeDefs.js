const { gql } = require('apollo-server');

module.exports = gql`
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
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
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

// module.exports = typeDefs;