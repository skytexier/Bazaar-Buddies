import { gql } from '@apollo/client';
// creating mutations for user and product and being to add, update, or delete
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($name: String!, $email: String!) {
    updateUser(name: $name, email: $email) {
      _id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      name
      description
      image
      price
      category {
        _id
        name
      }
      user {
        _id
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
mutation updateProduct($_id: ID!, $name: String, $description: String, $image: String, $price: Float, $category: Category) {
  updateProduct(_id: $_id, name: $name, description: $description, image: $image, price: $price, category: $category) {
    _id
    name
    description
    image
    price
    category
  }
}
`;

export const DELETE_PRODUCT = gql`
mutation deleteProduct($_id: ID!) {
  deleteProduct(_id: $_id)
}
`;
//add products later
