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