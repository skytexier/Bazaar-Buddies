import { gql } from '@apollo/client';

// get products, categories, and user
export const QUERY_PRODUCTS = gql`
{
    products {
      name
      image
      description
      price
      category {
        name
      }
    }
  }
`;

export const GET_PRODUCT_BY_USER = gql`
  query getProductByUser($userId: ID!) {
    getProductByUser(userId: $userId) {
      _id
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

export const QUERY_CATEGORIES = gql`
{
    categories {
      _id
      name
    }
  }
`;

export const GET_USER = gql`
{
  me {
    _id
    email
    name
  }
}
`;